import path from "node:path";
import type { Plugin } from "fumadocs-mdx";
import { getGitDocHistory } from "@/lib/git-doc-history";

const ident = (line: string, spaces = 0) => `${" ".repeat(spaces)}${line}`;

const extendTypes = `{
  /**
   * 文档最后修改时间，默认来自 Git 最近一次提交。
   */
  lastModified?: Date;
  /**
   * 最后编辑者，默认来自 Git 最近一次提交作者。
   */
  lastEditor?: string;
}`;

/**
 * 为 MDX 文档注入 Git 历史：lastModified 与 lastEditor。
 */
export function docHistory(options: { filter?: (collection: string) => boolean } = {}) {
  const { filter = () => true } = options;
  let cwd = process.cwd();

  return {
    name: "doc-history",
    "index-file": {
      generateTypeConfig() {
        const lines = ["{"];
        lines.push("  DocData: {");
        for (const collection of this.core.getCollections()) {
          if (filter(collection.name)) {
            lines.push(ident(`${collection.name}: ${extendTypes},`, 2));
          }
        }
        lines.push("  }");
        lines.push("}");
        return lines.join("\n");
      },
      serverOptions(options) {
        options.doc ??= {};
        options.doc.passthroughs ??= [];
        options.doc.passthroughs.push("lastModified", "lastEditor");
      },
    },
    config() {
      const { workspace } = this.core.getOptions();
      cwd = workspace ? path.resolve(workspace.dir) : process.cwd();
    },
    doc: {
      async vfile(file) {
        if (!filter(this.collection.name)) return;

        const history = await getGitDocHistory(this.filePath, cwd);
        if (!history) return;

        file.data["mdx-export"] ??= [];
        file.data["mdx-export"].push(
          {
            name: "lastModified",
            value: history.lastModified,
          },
          {
            name: "lastEditor",
            value: history.lastEditor,
          },
        );
      },
    },
  } satisfies Plugin;
}
