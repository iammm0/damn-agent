import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { CodeCompare } from "@/components/code-compare";
import { CodePreview } from "@/components/code-preview";
import { CodePreviewTabs } from "@/components/code-preview-tabs";
import { Flowchart } from "@/components/flowchart";
import { MaintainersSync } from "@/components/maintainers-sync";
import { Mermaid } from "@/components/mermaid";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    CodePreview,
    CodePreviewTabs,
    CodeCompare,
    Mermaid,
    Flowchart,
    MaintainersSync,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
