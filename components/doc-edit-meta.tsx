import Link from "next/link";
import { Clock3, UserRound } from "lucide-react";
import {
  formatDocEditDate,
  type ResolvedDocEditMeta,
} from "@/lib/doc-edit-meta";
import { cn } from "@/lib/utils";

type DocEditMetaProps = ResolvedDocEditMeta & {
  className?: string;
};

export function DocEditMeta({
  editedAt,
  editor,
  editorUrl,
  className,
}: DocEditMetaProps) {
  const formattedDate = formatDocEditDate(editedAt);

  return (
    <aside
      className={cn(
        "not-prose -mt-2 mb-6 flex flex-col gap-2 border-b pb-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1",
        className,
      )}
      aria-label="文档编辑信息"
    >
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="size-3.5 shrink-0" />
        最后编辑：
        <time dateTime={editedAt.toISOString()}>{formattedDate}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <UserRound className="size-3.5 shrink-0" />
        编辑者：
        {editorUrl ? (
          <Link
            href={editorUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-primary hover:underline"
          >
            @{editor}
          </Link>
        ) : (
          <span className="font-medium text-foreground">{editor}</span>
        )}
      </span>
    </aside>
  );
}
