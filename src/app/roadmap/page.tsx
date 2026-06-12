import type { Metadata } from "next";
import { LearningPath } from "@/components/learning-path";
import { PageIntro, PageShell } from "@/components/page-shell";
import { learningPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "学习路线",
  description: "按阶段学习 AI Agent 的概念、工程实践、框架工具和案例拆解。",
};

export default function RoadmapPage() {
  return (
    <PageShell activeHref="/roadmap">
      <PageIntro
        eyebrow="Roadmap"
        title="智能体学习路线"
        description="按工程能力而不是热词排序：先建立智能体循环，再补上下文、记忆、评测、框架和真实案例。"
      />
      <LearningPath steps={learningPath} />
    </PageShell>
  );
}
