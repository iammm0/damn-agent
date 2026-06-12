import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro, PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { practices } from "@/lib/site";

export const metadata: Metadata = {
  title: "工程实践",
  description: "AI Agent 工程化实践：上下文工程、评测回归、安全边界和可观测性。",
};

export default function PracticesPage() {
  return (
    <PageShell activeHref="/practices">
      <PageIntro
        eyebrow="Practices"
        title="工程实践"
        description="智能体能跑只是起点。真正进入工程阶段，需要把行为、成本、失败和权限都变得可观察、可回放、可约束。"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.title} href={practice.href} className="group block h-full">
              <Card className="h-full rounded-lg transition-colors hover:border-primary/40 hover:bg-accent/40">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-md border bg-background">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="flex items-center justify-between gap-3 text-base">
                    {practice.title}
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{practice.description}</p>
                  <ul className="mt-4 grid gap-2 text-sm">
                    {practice.checks.map((check) => (
                      <li key={check} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        {check}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </PageShell>
  );
}
