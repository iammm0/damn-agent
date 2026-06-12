import type { Metadata } from "next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { mainNav, siteConfig } from "@/lib/site";
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

  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: siteConfig.name,
      }}
      links={mainNav.map((item) => ({
        text: item.title,
        url: item.href,
      }))}
      sidebar={{
        enabled: true,
      }}
      themeSwitch={{
        enabled: true,
      }}
    >
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody className="prose-code-scroll">
          <MDXContent />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
