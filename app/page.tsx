import type { Metadata } from "next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { getMDXComponents } from "@/mdx-components";
import { DocEditMeta } from "@/components/doc-edit-meta";
import { resolveDocEditMeta } from "@/lib/doc-edit-meta";
import { sharedDocsLayoutProps } from "@/lib/docs-layout";
import { siteConfig } from "@/lib/site";
import { source } from "@/lib/source";

export async function generateMetadata(): Promise<Metadata> {
  const page = source.getPage([]);

  if (!page) {
    return {
      title: siteConfig.name,
      description: siteConfig.description,
    };
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default function Home() {
  const page = source.getPage([]);

  if (!page) {
    return null;
  }

  const MDXContent = page.data.body;
  const editMeta = resolveDocEditMeta(page.data);

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...sharedDocsLayoutProps}
    >
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        {editMeta ? <DocEditMeta {...editMeta} /> : null}
        <DocsBody className="prose-code-scroll">
          <MDXContent components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
