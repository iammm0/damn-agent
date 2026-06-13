import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import type { Folder } from "fumadocs-core/page-tree";

function promoteFolderIndex(node: Folder): Folder {
  if (node.index) {
    return node;
  }

  const indexPage = node.children.findIndex(
    (child) => child.type === "page" && child.$ref?.endsWith("/index.mdx"),
  );

  if (indexPage === -1) {
    return node;
  }

  const indexNode = node.children[indexPage];
  if (indexNode.type !== "page") {
    return node;
  }

  return {
    ...node,
    index: indexNode,
    children: node.children.filter((_, index) => index !== indexPage),
  };
}

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  pageTree: {
    transformers: [
      {
        folder: promoteFolderIndex,
      },
    ],
  },
});
