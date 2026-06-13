export type FlowchartDirection = "TB" | "TD" | "BT" | "LR" | "RL";

const FLOWCHART_HEADER = /^(flowchart|graph)\s+(TB|TD|BT|RL|LR)/i;

/** 若 chart 未声明 flowchart/graph 头，则自动补上方向前缀。 */
export function normalizeFlowchartChart(
  chart: string,
  direction: FlowchartDirection = "TD",
): string {
  const trimmed = chart.trim();
  if (!trimmed) return `flowchart ${direction}`;

  if (FLOWCHART_HEADER.test(trimmed)) {
    return trimmed;
  }

  return `flowchart ${direction}\n${trimmed}`;
}
