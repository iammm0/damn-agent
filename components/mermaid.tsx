"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { AlertCircle, Loader2 } from "lucide-react";
import { DiagramFrame } from "@/components/diagram-frame";
import { CodePreview } from "@/components/code-preview";
import { cn } from "@/lib/utils";

export type MermaidProps = {
  /** Mermaid 图表定义 */
  chart: string;
  /** 图表标题 */
  title?: string;
  /** 图表说明 */
  caption?: string;
  className?: string;
};

type RenderState =
  | { status: "loading" }
  | {
      status: "success";
      svg: string;
      bindFunctions?: (element: Element) => void;
    }
  | { status: "error"; message: string };

export function Mermaid({ chart, title, caption, className }: MermaidProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [state, setState] = useState<RenderState>({ status: "loading" });
  const normalizedChart = chart.trim().replaceAll("\\n", "\n");

  useEffect(() => {
    let cancelled = false;

    async function renderChart() {
      try {
        const { default: mermaid } = await import("mermaid");

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          fontFamily: "inherit",
          themeCSS: "margin: 0 auto;",
          theme: resolvedTheme === "dark" ? "dark" : "default",
        });

        const result = await mermaid.render(
          `mermaid-${id.replace(/:/g, "")}`,
          normalizedChart,
        );

        if (cancelled) return;

        setState({
          status: "success",
          svg: result.svg,
          bindFunctions: result.bindFunctions,
        });
      } catch (error) {
        if (cancelled) return;

        setState({
          status: "error",
          message:
            error instanceof Error ? error.message : "Mermaid 图表渲染失败",
        });
      }
    }

    void renderChart();

    return () => {
      cancelled = true;
    };
  }, [id, normalizedChart, resolvedTheme]);

  useEffect(() => {
    if (state.status !== "success" || !containerRef.current) return;
    state.bindFunctions?.(containerRef.current);
  }, [state]);

  if (state.status === "loading") {
    return (
      <DiagramFrame title={title} caption={caption} className={className}>
        <DiagramPlaceholder />
      </DiagramFrame>
    );
  }

  if (state.status === "error") {
    return (
      <div className={cn("not-prose space-y-3", className)}>
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <div>
            <p className="font-medium">图表渲染失败</p>
            <p className="mt-1 text-xs text-destructive/80">{state.message}</p>
          </div>
        </div>
        <CodePreview
          code={normalizedChart}
          lang="text"
          title={title ?? "Mermaid 源码"}
          showLineNumbers={false}
          collapsible={false}
        />
      </div>
    );
  }

  return (
    <DiagramFrame title={title} caption={caption} className={className}>
      <div
        ref={containerRef}
        className="mermaid-diagram flex min-h-24 items-center justify-center [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: state.svg }}
      />
    </DiagramFrame>
  );
}

function DiagramPlaceholder() {
  return (
    <div className="flex min-h-24 items-center justify-center gap-2 text-sm text-muted-foreground">
      <Loader2 className="size-4 animate-spin" />
      正在渲染图表…
    </div>
  );
}
