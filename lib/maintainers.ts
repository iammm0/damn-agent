/** 从 GitHub noreply 邮箱解析用户名，例如 145631324+iammm0@users.noreply.github.com */
export function parseGithubIdFromEmail(email: string): string | null {
  const match = email.match(/^(?:\d+\+)?([^@+]+)@users\.noreply\.github\.com$/i);
  return match?.[1] ?? null;
}

export function getGithubProfileUrl(editor: string): string | undefined {
  if (!/^[a-zA-Z0-9-]+$/.test(editor)) return undefined;
  return `https://github.com/${editor}`;
}

export function resolveEditorFromGit(authorName: string, authorEmail: string): string {
  const fromEmail = parseGithubIdFromEmail(authorEmail.trim());
  if (fromEmail) return fromEmail;

  const normalizedName = authorName.trim();
  if (getGithubProfileUrl(normalizedName)) {
    return normalizedName;
  }

  return normalizedName;
}
