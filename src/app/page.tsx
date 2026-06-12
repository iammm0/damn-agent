import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, FlaskConical, Library, Route } from "lucide-react";
import { AgentFlowDiagram } from "@/components/agent-flow-diagram";
import { ConceptCard } from "@/components/concept-card";
import { FrameworkCard } from "@/components/framework-card";
import { LearningPath } from "@/components/learning-path";
import { PageShell } from "@/components/page-shell";
import { RelatedProjects } from "@/components/related-projects";
import { ResourceList } from "@/components/resource-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  agentFlowChart,
  caseStudies,
  concepts,
  frameworks,
  learningPath,
  relatedProjects,
  resources,
  siteConfig,
} from "@/lib/site";

export default function Home() {
  return (
    <PageShell withSidebar={false}>
      <section className="grid gap-8 py-4 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-1 text-sm text-muted-foreground">
            <BookOpen className="size-4 text-primary" aria-hidden="true" />
            AI Agent 技术学习文档站
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="text-xl font-medium text-foreground">{siteConfig.cnName}</p>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              从 Agent Loop、工具调用、记忆、评测到框架选型和案例拆解，这里按工程学习路径组织中文内容，帮助开发者把智能体从概念推进到可运行系统。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/roadmap">
                查看学习路线
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs">进入文档</Link>
            </Button>
          </div>
        </div>
        <AgentFlowDiagram chart={agentFlowChart} />
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          ["路线阶段", "5", "从心智模型到案例拆解"],
          ["核心专题", String(concepts.length), "概念、工具、记忆、多 Agent"],
          ["框架工具", String(frameworks.length), "按工程边界比较"],
          ["中文草稿", "10", "MDX 内容已可阅读"],
        ].map(([label, value, desc]) => (
          <Card key={label} className="rounded-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-mono text-3xl font-semibold">{value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-12 space-y-4">
        <SectionTitle icon={Route} title="学习路线入口" href="/roadmap" />
        <LearningPath steps={learningPath.slice(0, 3)} />
      </section>

      <section className="mt-12 space-y-4">
        <SectionTitle icon={BookOpen} title="核心专题卡片" href="/concepts" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {concepts.map((concept) => (
            <ConceptCard key={concept.title} concept={concept} />
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <SectionTitle icon={Library} title="框架工具入口" href="/frameworks" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {frameworks.map((framework) => (
            <FrameworkCard key={framework.name} framework={framework} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <SectionTitle icon={FlaskConical} title="案例拆解入口" href="/cases" />
          <div className="grid gap-4">
            {caseStudies.map((item) => (
              <Link key={item.title} href={item.href} className="group block">
                <Card className="rounded-lg transition-colors hover:border-primary/40 hover:bg-accent/40">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-3 text-base">
                      {item.title}
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map((stack) => (
                        <span key={stack} className="rounded-md border bg-background px-2 py-1 font-mono text-[11px]">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <SectionTitle icon={Library} title="资源入口" href="/resources" />
          <ResourceList resources={resources} />
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Related Projects
          </p>
          <h2 className="text-xl font-semibold tracking-tight">作者延伸项目</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            这些是作者的个人项目，不属于 Agent 技术学习路线主线；如果你对安全自动化、工具执行层和运行环境映射感兴趣，可以作为旁路参考。
          </p>
        </div>
        <RelatedProjects projects={relatedProjects} />
      </section>
    </PageShell>
  );
}

function SectionTitle({
  icon: Icon,
  title,
  href,
}: {
  icon: LucideIcon;
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        {title}
      </h2>
      <Button asChild variant="ghost" size="sm">
        <Link href={href}>
          查看全部
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
