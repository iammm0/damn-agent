import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function SiteBrand() {
  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src={siteConfig.avatar}
        alt=""
        width={28}
        height={28}
        className="size-7 rounded-full border bg-background object-cover"
        aria-hidden="true"
      />
      <span className="font-semibold">{siteConfig.name}</span>
    </span>
  );
}
