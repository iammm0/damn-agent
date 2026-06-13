"use client";

import { Mermaid, type MermaidProps } from "@/components/mermaid";
import {
  normalizeFlowchartChart,
  type FlowchartDirection,
} from "@/lib/normalize-flowchart";

export type FlowchartProps = Omit<MermaidProps, "chart"> & {
  /** Flowchart 节点与连线定义；可省略 flowchart 头，组件会自动补全 */
  chart: string;
  /** 布局方向，默认 TD（自上而下） */
  direction?: FlowchartDirection;
};

export function Flowchart({
  chart,
  direction = "TD",
  ...props
}: FlowchartProps) {
  return (
    <Mermaid
      {...props}
      chart={normalizeFlowchartChart(chart, direction)}
    />
  );
}
