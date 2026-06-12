import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { PageIntro, PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "案例拆解",
  description: "AI Agent 案例拆解入口：研究、代码审查、运维排障等场景。",
};

export default function CasesPage() {
  return (
    <PageShell activeHref="/cases">
      <PageIntro
        eyebrow="Cases"
        title="案例拆解"
        description="每个案例都围绕任务边界、工具选择、状态流转、失败处理和人工接管展开，帮助你迁移到自己的业务。"
      />
      <div className="grid gap-4">
        {caseStudies.map((item) => (
          <Link key={item.title} href={item.href} className="group block">
            <Card className="rounded-lg transition-colors hover:border-primary/40 hover:bg-accent/40">
              <CardHeader className="sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-md border bg-background">
                    <FlaskConical className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-md">
                    {item.scenario}
                  </Badge>
                  {item.stack.map((stack) => (
                    <Badge key={stack} variant="outline" className="rounded-md">
                      {stack}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
