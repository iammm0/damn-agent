import Link from "next/link";
import { pageNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteSidebar({
  activeHref,
  className,
}: {
  activeHref?: string;
  className?: string;
}) {
  return (
    <aside className={cn("hidden lg:block", className)}>
      <div className="sticky top-20 rounded-lg border bg-card p-3">
        <p className="px-2 pb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          导航
        </p>
        <nav className="grid gap-1">
          {pageNav.map((item) => {
            const Icon = item.icon;
            const active = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-start gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent",
                  active && "bg-accent text-accent-foreground",
                )}
              >
                {Icon ? <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /> : null}
                <span>
                  <span className="block font-medium">{item.title}</span>
                  {item.description ? (
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
