"use client";

import { useEffect, useId, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type AgentFlowDiagramProps = {
  chart: string;
  className?: string;
};

export function AgentFlowDiagram({ chart, className }: AgentFlowDiagramProps) {
  const id = useId().replaceAll(":", "");
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: resolvedTheme === "dark" ? "dark" : "default",
          flowchart: {
            curve: "basis",
            htmlLabels: false,
          },
        });

        const result = await mermaid.render(`agent-flow-${id}`, chart);
        if (!cancelled) {
          const safeSvg = result.svg.replace(/<script[\s\S]*?<\/script>/gi, "");
          setSvg(safeSvg);
          setError(null);
        }
      } catch (renderError) {
        if (!cancelled) {
          setSvg("");
          setError(renderError instanceof Error ? renderError.message : "Mermaid render failed");
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-card p-4 text-sm",
        className,
      )}
    >
      {error ? (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-destructive">
          Mermaid 渲染失败：{error}
        </div>
      ) : svg ? (
        <div
          className="mx-auto max-w-full overflow-x-auto [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="flex h-48 items-center justify-center text-muted-foreground">
          正在渲染流程图...
        </div>
      )}
    </div>
  );
}
