import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteSidebar } from "@/components/site-sidebar";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  activeHref?: string;
  withSidebar?: boolean;
  className?: string;
};

export function PageShell({
  children,
  activeHref,
  withSidebar = true,
  className,
}: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className={cn("mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8", className)}>
        {withSidebar ? (
          <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            <SiteSidebar activeHref={activeHref} />
            <div className="min-w-0">{children}</div>
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="mb-8 max-w-4xl space-y-4">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      {children}
    </section>
  );
}
