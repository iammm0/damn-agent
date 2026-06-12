import { cn } from "@/lib/utils";

type CodeCompareProps = {
  beforeTitle?: string;
  afterTitle?: string;
  before: string;
  after: string;
  language?: string;
  className?: string;
};

export function CodeCompare({
  beforeTitle = "Before",
  afterTitle = "After",
  before,
  after,
  language = "ts",
  className,
}: CodeCompareProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      <CodePanel title={beforeTitle} code={before} language={language} tone="muted" />
      <CodePanel title={afterTitle} code={after} language={language} tone="primary" />
    </div>
  );
}

function CodePanel({
  title,
  code,
  language,
  tone,
}: {
  title: string;
  code: string;
  language: string;
  tone: "muted" | "primary";
}) {
  return (
    <figure className="overflow-hidden rounded-lg border bg-card">
      <figcaption className="flex items-center justify-between border-b px-4 py-2 text-sm">
        <span className="font-medium">{title}</span>
        <span
          className={cn(
            "rounded-md px-2 py-1 font-mono text-[11px]",
            tone === "primary"
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground",
          )}
        >
          {language}
        </span>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-sm leading-6">
        <code>{code.trim()}</code>
      </pre>
    </figure>
  );
}
