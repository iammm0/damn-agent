import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";
import { pageSchema } from "fumadocs-core/source/schema";
import { docHistory } from "@/lib/fumadocs-plugin-doc-history";

const docPageSchema = pageSchema.extend({
  /** 手动指定的最后编辑时间（ISO 8601），会覆盖 Git 记录 */
  lastEdited: pageSchema.shape.title.optional(),
  /** 手动指定的编辑者 GitHub ID，会覆盖 Git 记录 */
  editor: pageSchema.shape.title.optional(),
});

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: docPageSchema,
  },
});

export default defineConfig({
  plugins: [docHistory()],
  mdxOptions: {
    providerImportSource: "@/mdx-components",
    remarkPlugins: [remarkMdxMermaid],
  },
});
