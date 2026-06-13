import { CodePreview } from "@/components/code-preview";
import { cn } from "@/lib/utils";

type CodeCompareProps = {
  beforeTitle?: string;
  afterTitle?: string;
  before: string;
  after: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
};

export function CodeCompare({
  beforeTitle = "Before",
  afterTitle = "After",
  before,
  after,
  language = "typescript",
  showLineNumbers = true,
  className,
}: CodeCompareProps) {
  return (
    <div className={cn("not-prose grid gap-4 md:grid-cols-2", className)}>
      <CodePreview
        code={before}
        lang={language}
        title={beforeTitle}
        showLineNumbers={showLineNumbers}
        collapsible={false}
      />
      <CodePreview
        code={after}
        lang={language}
        title={afterTitle}
        showLineNumbers={showLineNumbers}
        collapsible={false}
      />
    </div>
  );
}
