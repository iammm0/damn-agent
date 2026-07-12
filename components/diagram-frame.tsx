import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DiagramFrameProps = {
  title?: string;
  caption?: string;
  className?: string;
  variant?: "card" | "plain";
  children: ReactNode;
};

export function DiagramFrame({
  title,
  caption,
  className,
  variant = "card",
  children,
}: DiagramFrameProps) {
  const isPlain = variant === "plain";

  return (
    <figure
      className={cn(
        isPlain
          ? "not-prose my-6 bg-transparent"
          : "not-prose my-6 overflow-hidden rounded-xl border bg-card shadow-sm",
        className,
      )}
    >
      {title ? (
        <figcaption
          className={cn(
            "text-sm font-medium text-foreground",
            isPlain ? "mb-2" : "border-b px-4 py-2.5",
          )}
        >
          {title}
        </figcaption>
      ) : null}
      <div
        className={cn(
          "fd-scroll-container overflow-x-auto",
          isPlain ? "py-4" : "p-4",
        )}
      >
        {children}
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "text-xs text-muted-foreground",
            isPlain ? "mt-2" : "border-t px-4 py-2",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
