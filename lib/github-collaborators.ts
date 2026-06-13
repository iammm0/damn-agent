import { unstable_cache } from "next/cache";
import { siteConfig } from "@/lib/site";

const GITHUB_API_VERSION = "2022-11-28";

export type GithubCollaboratorPermissions = {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
};

export type GithubCollaborator = {
  login: string;
  profileUrl: string;
  roleName: string;
  permissions: GithubCollaboratorPermissions;
  permissionLabel: string;
  description: string;
};

export type GithubCollaboratorsResult = {
  collaborators: GithubCollaborator[];
  syncedAt: Date;
  sourceUrl: string;
};

type GithubCollaboratorsApiItem = {
  login: string;
  role_name?: string;
  permissions?: Partial<GithubCollaboratorPermissions>;
};

const ADMIN_DESCRIPTIONS: Record<string, string> = {
  iammm0: "仓库管理员，负责项目配置、内容方向和发布节奏。",
};

function getGithubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export function formatPermissionLabel(
  permissions: GithubCollaboratorPermissions,
  roleName?: string,
): string {
  const labels: string[] = [];

  if (permissions.admin) labels.push("Admin");
  if (permissions.maintain) labels.push("Maintain");
  if (permissions.push) labels.push("Push");
  if (permissions.triage) labels.push("Triage");
  if (permissions.pull) labels.push("Pull");

  if (labels.length > 0) {
    return labels.join(" / ");
  }

  return roleName ?? "未知";
}

function normalizePermissions(
  permissions: Partial<GithubCollaboratorPermissions> | undefined,
): GithubCollaboratorPermissions {
  return {
    admin: permissions?.admin ?? false,
    maintain: permissions?.maintain ?? false,
    push: permissions?.push ?? false,
    triage: permissions?.triage ?? false,
    pull: permissions?.pull ?? false,
  };
}

function getCollaboratorDescription(
  login: string,
  permissions: GithubCollaboratorPermissions,
): string {
  if (ADMIN_DESCRIPTIONS[login]) {
    return ADMIN_DESCRIPTIONS[login];
  }

  if (permissions.admin) {
    return "仓库管理员。";
  }

  return "远端协作者，可参与内容与工程维护。";
}

function sortCollaborators(
  collaborators: GithubCollaborator[],
): GithubCollaborator[] {
  return [...collaborators].sort((left, right) => {
    const leftAdmin = left.permissions.admin ? 1 : 0;
    const rightAdmin = right.permissions.admin ? 1 : 0;

    if (leftAdmin !== rightAdmin) {
      return rightAdmin - leftAdmin;
    }

    return left.login.localeCompare(right.login, "en", { sensitivity: "base" });
  });
}

async function fetchGithubCollaborators(): Promise<GithubCollaboratorsResult> {
  const { owner, repo, url } = siteConfig.github;
  const endpoint = `https://api.github.com/repos/${owner}/${repo}/collaborators?per_page=100`;

  const response = await fetch(endpoint, {
    headers: getGithubHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    const message = await response.text();

    if (response.status === 401 || response.status === 403) {
      throw new Error(
        "GitHub API 鉴权失败：请在环境变量中配置 GITHUB_TOKEN 后重新构建或部署。",
      );
    }

    throw new Error(
      `GitHub collaborators 接口请求失败（${response.status}）：${message}`,
    );
  }

  const payload = (await response.json()) as GithubCollaboratorsApiItem[];

  const collaborators = sortCollaborators(
    payload.map((item) => {
      const permissions = normalizePermissions(item.permissions);
      const roleName = item.role_name ?? "unknown";

      return {
        login: item.login,
        profileUrl: `https://github.com/${item.login}`,
        roleName,
        permissions,
        permissionLabel: formatPermissionLabel(permissions, roleName),
        description: getCollaboratorDescription(item.login, permissions),
      };
    }),
  );

  return {
    collaborators,
    syncedAt: new Date(),
    sourceUrl: url,
  };
}

export const getGithubCollaborators = unstable_cache(
  fetchGithubCollaborators,
  ["github-collaborators", siteConfig.github.owner, siteConfig.github.repo],
  {
    revalidate: 3600,
    tags: ["maintainers"],
  },
);

export async function getCollaboratorLogins(): Promise<string[]> {
  const { collaborators } = await getGithubCollaborators();
  return collaborators.map((collaborator) => collaborator.login);
}
