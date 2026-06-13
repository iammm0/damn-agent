import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { resolveEditorFromGit } from "@/lib/maintainers";

const execFileAsync = promisify(execFile);

export type GitDocHistory = {
  lastModified: Date;
  lastEditor: string;
};

const cache = new Map<string, Promise<GitDocHistory | null>>();

export async function getGitDocHistory(
  filePath: string,
  cwd = process.cwd(),
): Promise<GitDocHistory | null> {
  const relativePath = path.relative(cwd, filePath);
  const cacheKey = `${cwd}:${relativePath}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const promise = readGitDocHistory(relativePath, cwd);
  cache.set(cacheKey, promise);
  return promise;
}

async function readGitDocHistory(
  relativePath: string,
  cwd: string,
): Promise<GitDocHistory | null> {
  try {
    const { stdout } = await execFileAsync(
      "git",
      ["log", "-1", "--pretty=format:%aI|%ae|%an", relativePath],
      { cwd },
    );

    if (!stdout.trim()) {
      return null;
    }

    const [timestamp, authorEmail = "", authorName = ""] = stdout
      .trim()
      .split("|");

    const lastModified = new Date(timestamp);
    if (Number.isNaN(lastModified.getTime())) {
      return null;
    }

    return {
      lastModified,
      lastEditor: resolveEditorFromGit(authorName, authorEmail),
    };
  } catch {
    return null;
  }
}
