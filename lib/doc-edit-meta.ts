import { getGithubProfileUrl } from "@/lib/maintainers";

export type DocPageHistory = {
  lastEdited?: string | Date;
  editor?: string;
  lastModified?: Date;
  lastEditor?: string;
};

export type ResolvedDocEditMeta = {
  editedAt: Date;
  editor: string;
  editorUrl?: string;
};

export function resolveDocEditMeta(
  data: DocPageHistory,
): ResolvedDocEditMeta | null {
  const editedAt = data.lastEdited
    ? new Date(data.lastEdited)
    : data.lastModified;

  const editor = data.editor ?? data.lastEditor;

  if (!editedAt || Number.isNaN(editedAt.getTime()) || !editor?.trim()) {
    return null;
  }

  const normalizedEditor = editor.trim();

  return {
    editedAt,
    editor: normalizedEditor,
    editorUrl: getGithubProfileUrl(normalizedEditor),
  };
}

export function formatDocEditDate(date: Date): string {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  }).format(date);
}
