import { siteConfig } from "@/lib/site";

export function SiteBrand() {
  return <span className="font-semibold">{siteConfig.name}</span>;
}
