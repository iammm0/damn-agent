"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  buildHighlightMeta,
  buildHighlightTransformers,
} from "@/lib/code-highlight";
import { codePreviewThemes } from "@/lib/shiki-themes";
import { cn } from "@/lib/utils";

export type CodePreviewProps = {
  /** 代码内容 */
  code: string;
  /** 语言标识，默认 typescript */
  lang?: string;
  /** 标题，显示在代码块顶部 */
  title?: string;
  /** 文件名，优先于 title 显示 */
  filename?: string;
  /** 是否显示行号 */
  showLineNumbers?: boolean;
  /** 行号起始值 */
  lineNumbersStart?: number;
  /** 高亮行号，如 "1,3-5,8" */
  highlightLines?: string;
  /** 聚焦行号，其余行模糊，如 "2-4" */
  focusLines?: string;
  /** 附加 meta 字符串，支持 Shiki meta 高亮语法 */
  meta?: string;
  /** 启用 diff 注释解析（代码内 // [!code ++] 等） */
  diff?: boolean;
  /** 最大高度（px），超出后可展开 */
  maxHeight?: number;
  /** 超出 maxHeight 时是否显示展开/收起 */
  collapsible?: boolean;
  /** collapsible 为 true 时的默认展开状态 */
  defaultExpanded?: boolean;
  /** 是否显示复制按钮 */
  allowCopy?: boolean;
  className?: string;
};

const DEFAULT_MAX_HEIGHT = 480;

export function CodePreview({
  code,
  lang = "typescript",
  title,
  filename,
  showLineNumbers = true,
  lineNumbersStart = 1,
  highlightLines,
  focusLines,
  meta,
  diff = false,
  maxHeight = DEFAULT_MAX_HEIGHT,
  collapsible = false,
  defaultExpanded = false,
  allowCopy = true,
  className,
}: CodePreviewProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const normalizedCode = code.trim();
  const displayTitle = filename ?? title;
  const lineCount = normalizedCode.split("\n").length;
  const shouldCollapse = collapsible && lineCount > 8;

  const highlightMeta = useMemo(
    () => buildHighlightMeta({ highlightLines, meta }),
    [highlightLines, meta],
  );

  const transformers = useMemo(
    () =>
      buildHighlightTransformers({
        highlightLines,
        focusLines,
        meta: highlightMeta,
        diff,
      }),
    [highlightLines, focusLines, highlightMeta, diff],
  );

  return (
    <div className={cn("group/code-preview not-prose", className)}>
      <DynamicCodeBlock
        lang={lang}
        code={normalizedCode}
        codeblock={{
          title: displayTitle,
          allowCopy,
          className: cn(
            "my-0 overflow-hidden",
            shouldCollapse && !expanded && "code-preview-collapsed",
          ),
          ...(showLineNumbers
            ? {
                "data-line-numbers": true,
                "data-line-numbers-start": lineNumbersStart,
              }
            : {}),
          viewportProps: {
            className: cn(
              shouldCollapse && !expanded && "overflow-hidden",
            ),
            style: shouldCollapse && !expanded ? { maxHeight } : undefined,
          },
        }}
        options={{
          themes: codePreviewThemes,
          meta: { __raw: highlightMeta },
          transformers,
        }}
      />

      <CodePreviewFooter
        lang={lang}
        lineCount={lineCount}
        shouldCollapse={shouldCollapse}
        expanded={expanded}
        onToggle={() => setExpanded((value) => !value)}
      />
    </div>
  );
}

function CodePreviewFooter({
  lang,
  lineCount,
  shouldCollapse,
  expanded,
  onToggle,
}: {
  lang: string;
  lineCount: number;
  shouldCollapse: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {
  if (!shouldCollapse) {
    return (
      <div className="mt-1 flex items-center justify-end gap-2 px-1">
        <Badge variant="secondary" className="font-mono text-[11px]">
          {lang}
        </Badge>
        <span className="text-xs text-muted-foreground">{lineCount} 行</span>
      </div>
    );
  }

  return (
    <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border bg-muted/40 px-3 py-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Badge variant="secondary" className="font-mono text-[11px]">
          {lang}
        </Badge>
        <span>{lineCount} 行</span>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-7 gap-1 text-xs"
        onClick={onToggle}
      >
        {expanded ? (
          <>
            收起
            <ChevronUp className="size-3.5" />
          </>
        ) : (
          <>
            展开全部
            <ChevronDown className="size-3.5" />
          </>
        )}
      </Button>
    </div>
  );
}
