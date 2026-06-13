import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { SiteBrand } from "@/components/site-brand";
import { source } from "@/lib/source";
import { mainNav } from "@/lib/site";

type DocsRouteProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: DocsRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function DocsRoutePage({ params }: DocsRouteProps) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;

  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: <SiteBrand />,
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
