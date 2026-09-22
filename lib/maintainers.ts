/** 从 GitHub noreply 邮箱解析用户名，例如 145631324+iammm0@users.noreply.github.com */
export function parseGithubIdFromEmail(email: string): string | null {
  const match = email.match(/^(?:\d+\+)?([^@+]+)@users\.noreply\.github\.com$/i);
  return match?.[1] ?? null;
}

export function getGithubProfileUrl(editor: string): string | undefined {
  if (!/^[a-zA-Z0-9-]+$/.test(editor)) return undefined;
  return `https://github.com/${editor}`;
}

/** 本地 Git 作者名到 GitHub ID。优先用 noreply 邮箱，这里只处理无法从邮箱解析的历史提交。 */
const GIT_EDITOR_ALIASES: Record<string, string> = {
  赵明俊: "iammm0",
};

export function resolveEditorFromGit(authorName: string, authorEmail: string): string {
  const fromEmail = parseGithubIdFromEmail(authorEmail.trim());
  if (fromEmail) return fromEmail;

  const normalizedName = authorName.trim();
  const aliased = GIT_EDITOR_ALIASES[normalizedName];
  if (aliased) return aliased;

  if (getGithubProfileUrl(normalizedName)) {
    return normalizedName;
  }

  return normalizedName;
}
