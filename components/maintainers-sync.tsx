import Link from "next/link";
import { AlertCircle, RefreshCw } from "lucide-react";
import { formatDocEditDate } from "@/lib/doc-edit-meta";
import {
  getGithubCollaborators,
  type GithubCollaborator,
} from "@/lib/github-collaborators";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type MaintainersSyncResult =
  | {
      status: "success";
      collaborators: GithubCollaborator[];
      syncedAt: Date;
      sourceUrl: string;
    }
  | {
      status: "error";
      message: string;
    };

async function loadMaintainersSync(): Promise<MaintainersSyncResult> {
  try {
    const data = await getGithubCollaborators();
    return {
      status: "success",
      ...data,
    };
  } catch (error) {
    return {
      status: "error",
      message:
        error instanceof Error
          ? error.message
          : "无法从 GitHub API 同步协作者信息。",
    };
  }
}

export async function MaintainersSync() {
  const result = await loadMaintainersSync();

  if (result.status === "error") {
    return <MaintainersError message={result.message} />;
  }

  return (
    <MaintainersTable
      collaborators={result.collaborators}
      syncedAt={result.syncedAt}
      sourceUrl={result.sourceUrl}
    />
  );
}

function MaintainersTable({
  collaborators,
  syncedAt,
  sourceUrl,
}: {
  collaborators: GithubCollaborator[];
  syncedAt: Date;
  sourceUrl: string;
}) {
  return (
    <div className="not-prose space-y-6">
      <MaintainersMeta syncedAt={syncedAt} sourceUrl={sourceUrl} />

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b bg-muted/40 text-left">
              <th className="px-4 py-3 font-medium">GitHub ID</th>
              <th className="px-4 py-3 font-medium">远端权限</th>
              <th className="px-4 py-3 font-medium">维护说明</th>
            </tr>
          </thead>
          <tbody>
            {collaborators.map((collaborator) => (
              <tr
                key={collaborator.login}
                className="border-b last:border-b-0 align-top"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <Link
                    href={collaborator.profileUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-primary hover:underline"
                  >
                    {collaborator.login}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {collaborator.permissionLabel}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {collaborator.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground">
        当前共同步 {collaborators.length} 位协作者。名单每小时从 GitHub API
        刷新一次。
      </p>
    </div>
  );
}

function MaintainersMeta({
  syncedAt,
  sourceUrl,
}: {
  syncedAt: Date;
  sourceUrl: string;
}) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
      <li>
        同步时间：
        <time dateTime={syncedAt.toISOString()} className="text-foreground">
          {formatDocEditDate(syncedAt)}
        </time>
      </li>
      <li>
        远端仓库：
        <Link
          href={sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary hover:underline"
        >
          {siteConfig.github.owner}/{siteConfig.github.repo}
        </Link>
      </li>
      <li>排序规则：管理员在前，其余账号按 GitHub ID 字母序排列。</li>
    </ul>
  );
}

function MaintainersError({ message }: { message: string }) {
  return (
    <div
      className={cn(
        "not-prose rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm",
      )}
      role="alert"
    >
      <div className="flex items-start gap-2 text-destructive">
        <AlertCircle className="mt-0.5 size-4 shrink-0" />
        <div className="space-y-2">
          <p className="font-medium">协作者信息同步失败</p>
          <p className="text-destructive/80">{message}</p>
          <p className="inline-flex items-center gap-1.5 text-muted-foreground">
            <RefreshCw className="size-3.5" />
            请配置 `GITHUB_TOKEN` 后重新构建，或在本地使用 `gh auth token`
            导出令牌。
          </p>
        </div>
      </div>
    </div>
  );
}
