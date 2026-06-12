import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import type { Concept } from "@/lib/site";

export function ConceptCard({ concept }: { concept: Concept }) {
  const Icon = concept.icon;

  return (
    <Link href={concept.href} className="group block h-full">
      <Card className="h-full rounded-lg transition-colors hover:border-primary/40 hover:bg-accent/40">
        <CardHeader className="gap-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex size-10 items-center justify-center rounded-md border bg-background">
              <Icon className="size-5 text-primary" aria-hidden="true" />
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-base">{concept.title}</CardTitle>
            <DifficultyBadge difficulty={concept.difficulty} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-muted-foreground">{concept.description}</p>
          <div className="flex flex-wrap gap-2">
            {concept.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
