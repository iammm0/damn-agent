import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RelatedProject } from "@/lib/site";

export function RelatedProjects({
  projects,
  compact = false,
}: {
  projects: RelatedProject[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
      {projects.map((project) => (
        <Card key={project.name} className="rounded-lg">
          <CardHeader className="gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Code2 className="size-4 text-primary" aria-hidden="true" />
                  {project.name}
                </CardTitle>
                <Badge variant="secondary" className="w-fit rounded-md">
                  {project.language}
                </Badge>
              </div>
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={`打开 ${project.name}`}
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
            <p className="rounded-md border bg-muted/40 p-3 text-sm leading-6 text-muted-foreground">
              {project.note}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.homepage ? (
              <Link
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                项目站点
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
