import type { ShikiTransformer } from "shiki";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

/** 解析行号范围，如 "1,3-5,8" → [1, 3, 4, 5, 8] */
export function parseLineRanges(input?: string): number[] {
  if (!input?.trim()) return [];

  const lines = new Set<number>();

  for (const part of input.split(",")) {
    const segment = part.trim();
    if (!segment) continue;

    if (segment.includes("-")) {
      const [startRaw, endRaw] = segment.split("-");
      const start = Number(startRaw);
      const end = Number(endRaw);
      if (!Number.isFinite(start) || !Number.isFinite(end)) continue;

      for (let line = Math.min(start, end); line <= Math.max(start, end); line++) {
        lines.add(line);
      }
      continue;
    }

    const line = Number(segment);
    if (Number.isFinite(line)) lines.add(line);
  }

  return [...lines].sort((a, b) => a - b);
}

function transformerLineClasses(options: {
  highlightLines?: number[];
  focusLines?: number[];
}): ShikiTransformer {
  const highlightLines = new Set(options.highlightLines ?? []);
  const focusLines = new Set(options.focusLines ?? []);

  return {
    name: "damn-agent-line-classes",
    pre(pre) {
      if (focusLines.size > 0) {
        this.addClassToHast(pre, "has-focused");
      }
    },
    line(node, line) {
      if (highlightLines.has(line)) {
        this.addClassToHast(node, "highlighted");
      }
      if (focusLines.has(line)) {
        this.addClassToHast(node, "focused");
      }
    },
  };
}

export type BuildHighlightTransformersOptions = {
  highlightLines?: string;
  focusLines?: string;
  meta?: string;
  diff?: boolean;
  notation?: boolean;
};

export function buildHighlightTransformers(
  options: BuildHighlightTransformersOptions = {},
): ShikiTransformer[] {
  const transformers: ShikiTransformer[] = [];
  const parsedHighlight = parseLineRanges(options.highlightLines);
  const parsedFocus = parseLineRanges(options.focusLines);

  if (parsedHighlight.length > 0 || parsedFocus.length > 0) {
    transformers.push(
      transformerLineClasses({
        highlightLines: parsedHighlight,
        focusLines: parsedFocus,
      }),
    );
  }

  if (options.meta) {
    transformers.push(transformerMetaHighlight());
    transformers.push(transformerMetaWordHighlight());
  }

  if (options.notation !== false) {
    transformers.push(
      transformerNotationHighlight(),
      transformerNotationFocus(),
      transformerNotationWordHighlight(),
    );
  }

  if (options.diff) {
    transformers.push(transformerNotationDiff());
  }

  return transformers;
}

export function buildHighlightMeta(options: {
  highlightLines?: string;
  meta?: string;
}): string {
  const parts: string[] = [];

  if (options.meta?.trim()) {
    parts.push(options.meta.trim());
  }

  const parsedHighlight = parseLineRanges(options.highlightLines);
  if (parsedHighlight.length > 0) {
    parts.push(`{${formatLineRanges(parsedHighlight)}}`);
  }

  return parts.join(" ");
}

function formatLineRanges(lines: number[]): string {
  if (lines.length === 0) return "";

  const ranges: string[] = [];
  let rangeStart = lines[0];
  let rangeEnd = lines[0];

  for (let index = 1; index < lines.length; index++) {
    const line = lines[index];
    if (line === rangeEnd + 1) {
      rangeEnd = line;
      continue;
    }

    ranges.push(rangeStart === rangeEnd ? `${rangeStart}` : `${rangeStart}-${rangeEnd}`);
    rangeStart = line;
    rangeEnd = line;
  }

  ranges.push(rangeStart === rangeEnd ? `${rangeStart}` : `${rangeStart}-${rangeEnd}`);
  return ranges.join(",");
}
