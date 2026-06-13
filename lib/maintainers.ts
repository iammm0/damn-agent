/** 远端协作者 GitHub ID，与 content/docs/maintainers.mdx 保持一致。 */
export const maintainerGithubIds = [
  "iammm0",
  "chagumu-01",
  "JackWinston-coder",
  "ormasia",
  "p20061",
  "Riverzen",
  "Sorwcyra",
  "TerryLiang9",
  "violet5564",
  "WHUdonic",
  "WHUdonic77",
] as const;

export type MaintainerGithubId = (typeof maintainerGithubIds)[number];

const maintainerIdSet = new Set<string>(maintainerGithubIds);

export function isMaintainerGithubId(value: string): value is MaintainerGithubId {
  return maintainerIdSet.has(value);
}

export function getGithubProfileUrl(editor: string): string | undefined {
  if (!/^[a-zA-Z0-9-]+$/.test(editor)) return undefined;
  return `https://github.com/${editor}`;
}

/** 从 GitHub noreply 邮箱解析用户名，例如 145631324+iammm0@users.noreply.github.com */
export function parseGithubIdFromEmail(email: string): string | null {
  const match = email.match(/^(?:\d+\+)?([^@+]+)@users\.noreply\.github\.com$/i);
  return match?.[1] ?? null;
}

export function resolveEditorFromGit(authorName: string, authorEmail: string): string {
  const fromEmail = parseGithubIdFromEmail(authorEmail.trim());
  if (fromEmail) return fromEmail;

  const normalizedName = authorName.trim();
  if (isMaintainerGithubId(normalizedName)) return normalizedName;

  return normalizedName;
}
