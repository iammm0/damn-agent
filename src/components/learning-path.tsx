import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import type { LearningStep } from "@/lib/site";

export function LearningPath({ steps }: { steps: LearningStep[] }) {
  return (
    <div className="grid gap-4">
      {steps.map((step) => (
        <Link key={step.phase} href={step.href} className="group block">
          <Card className="rounded-lg transition-colors hover:border-primary/40 hover:bg-accent/40">
            <CardHeader className="gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md border bg-background font-mono text-sm text-muted-foreground">
                  {step.phase}
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-base">{step.title}</CardTitle>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{step.goal}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DifficultyBadge difficulty={step.difficulty} />
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  关键主题
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.topics.map((topic) => (
                    <span key={topic} className="rounded-md border bg-background px-2 py-1 text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  阶段产出
                </p>
                <ul className="grid gap-1 text-sm text-muted-foreground">
                  {step.outputs.map((output) => (
                    <li key={output} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
