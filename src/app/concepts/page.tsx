import type { Metadata } from "next";
import { ConceptCard } from "@/components/concept-card";
import { PageIntro, PageShell } from "@/components/page-shell";
import { concepts } from "@/lib/site";

export const metadata: Metadata = {
  title: "核心概念",
  description: "AI Agent 核心概念索引：Agent Loop、工具调用、记忆与状态、多 Agent 协作。",
};

export default function ConceptsPage() {
  return (
    <PageShell activeHref="/concepts">
      <PageIntro
        eyebrow="Concepts"
        title="核心概念"
        description="这些概念是不同框架之间的共同底层语言。先理解它们，再选择工具会更稳。"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {concepts.map((concept) => (
          <ConceptCard key={concept.title} concept={concept} />
        ))}
      </div>
    </PageShell>
  );
}
