import type { Metadata } from "next";
import { PageIntro, PageShell } from "@/components/page-shell";
import { ResourceList } from "@/components/resource-list";
import { resources } from "@/lib/site";

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
    </PageShell>
  );
}
