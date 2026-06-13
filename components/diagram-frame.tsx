import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DiagramFrameProps = {
  title?: string;
  caption?: string;
  className?: string;
  children: ReactNode;
};

export function DiagramFrame({
  title,
  caption,
  className,
  children,
}: DiagramFrameProps) {
  return (
    <figure
      className={cn(
        "not-prose my-6 overflow-hidden rounded-xl border bg-card shadow-sm",
        className,
      )}
    >
      {title ? (
        <figcaption className="border-b px-4 py-2.5 text-sm font-medium text-foreground">
          {title}
        </figcaption>
      ) : null}
      <div className="fd-scroll-container overflow-x-auto p-4">{children}</div>
      {caption ? (
        <figcaption className="border-t px-4 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
