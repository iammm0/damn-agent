"use client";

import {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from "fumadocs-ui/components/codeblock";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { cn } from "@/lib/utils";
import {
  buildHighlightMeta,
  buildHighlightTransformers,
} from "@/lib/code-highlight";
import { codePreviewThemes } from "@/lib/shiki-themes";

export type CodePreviewTabItem = {
  /** Tab 标识 */
  value: string;
  /** Tab 显示名称 */
  label: string;
  /** 代码内容 */
  code: string;
  /** 语言 */
  lang?: string;
  /** 高亮行号 */
  highlightLines?: string;
  /** 聚焦行号 */
  focusLines?: string;
  /** 附加 meta */
  meta?: string;
  /** 启用 diff 注释 */
  diff?: boolean;
};

export type CodePreviewTabsProps = {
  items: CodePreviewTabItem[];
  defaultValue?: string;
  showLineNumbers?: boolean;
  allowCopy?: boolean;
  className?: string;
};

export function CodePreviewTabs({
  items,
  defaultValue,
  showLineNumbers = true,
  allowCopy = true,
  className,
}: CodePreviewTabsProps) {
  if (items.length === 0) return null;

  const initialValue = defaultValue ?? items[0]?.value;

  return (
    <CodeBlockTabs
      defaultValue={initialValue}
      className={cn("not-prose", className)}
    >
      <CodeBlockTabsList>
        {items.map((item) => (
          <CodeBlockTabsTrigger key={item.value} value={item.value}>
            {item.label}
          </CodeBlockTabsTrigger>
        ))}
      </CodeBlockTabsList>

      {items.map((item) => {
        const highlightMeta = buildHighlightMeta({
          highlightLines: item.highlightLines,
          meta: item.meta,
        });

        return (
          <CodeBlockTab key={item.value} value={item.value}>
            <DynamicCodeBlock
              lang={item.lang ?? "typescript"}
              code={item.code.trim()}
              codeblock={{
                allowCopy,
                className: "my-0 rounded-none border-0 shadow-none",
                ...(showLineNumbers ? { "data-line-numbers": true } : {}),
              }}
              options={{
                themes: codePreviewThemes,
                meta: { __raw: highlightMeta },
                transformers: buildHighlightTransformers({
                  highlightLines: item.highlightLines,
                  focusLines: item.focusLines,
                  meta: highlightMeta,
                  diff: item.diff,
                }),
              }}
            />
          </CodeBlockTab>
        );
      })}
    </CodeBlockTabs>
  );
}
