import type { Metadata } from "next";
import { PageIntro, PageShell } from "@/components/page-shell";
import { RelatedProjects } from "@/components/related-projects";
import { ResourceList } from "@/components/resource-list";
import { relatedProjects, resources } from "@/lib/site";

export const metadata: Metadata = {
  title: "资源清单",
  description: "AI Agent 学习资源清单：论文、课程、仓库、文档和工具。",
};

export default function ResourcesPage() {
  return (
    <PageShell activeHref="/resources">
      <PageIntro
        eyebrow="Resources"
        title="资源清单"
        description="这里优先收录能帮助你形成工程判断的资料：概念来源、框架文档、评测方法、案例代码和实践模板。"
      />
      <ResourceList resources={resources} />
      <section className="mt-8 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Related Projects
          </p>
          <h2 className="text-xl font-semibold tracking-tight">作者延伸项目</h2>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            下面两个项目不放入 Agent 学习路线，也不是框架选型清单；它们更适合作为安全自动化和工具执行边界的延伸参考。
          </p>
        </div>
        <RelatedProjects projects={relatedProjects} />
      </section>
    </PageShell>
  );
}
