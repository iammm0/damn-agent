import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Badge } from "@/components/ui/badge";

export function SiteBrand() {
  return (
    <span className="inline-flex items-center gap-2 font-semibold">
      <Image
        src={siteConfig.brand.logo}
        alt=""
        width={24}
        height={24}
        className="size-6 shrink-0"
        priority
        unoptimized
      />
      {siteConfig.name}
      {siteConfig.versionLabel ? (
        <Badge variant="secondary" className="px-1.5 py-0 text-[10px] font-medium">
          {siteConfig.versionLabel}
        </Badge>
      ) : null}
    </span>
  );
}
