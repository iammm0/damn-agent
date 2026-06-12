import type { Metadata } from "next";
import { FrameworkCard } from "@/components/framework-card";
import { PageIntro, PageShell } from "@/components/page-shell";
import { frameworks } from "@/lib/site";

export const metadata: Metadata = {
  title: "框架工具",
  description: "AI Agent 框架工具索引与工程选型入口。",
};

export default function FrameworksPage() {
  return (
    <PageShell activeHref="/frameworks">
      <PageIntro
        eyebrow="Frameworks"
        title="框架工具"
        description="不要只按流行度选框架。先看你的系统是否需要状态机、工作流、工具权限、人工接管、多 Agent 协作或产品内嵌。"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {frameworks.map((framework) => (
          <FrameworkCard key={framework.name} framework={framework} />
        ))}
      </div>
    </PageShell>
  );
}
