import { SiteBrand } from "@/components/site-brand";
import { siteConfig } from "@/lib/site";

export const sharedDocsLayoutProps = {
  githubUrl: siteConfig.github.url,
  nav: {
    title: <SiteBrand />,
  },
  sidebar: {
    enabled: true,
  },
  themeSwitch: {
    enabled: true,
  },
} as const;
