import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Framework } from "@/lib/site";

export function FrameworkCard({ framework }: { framework: Framework }) {
  return (
    <Link href={framework.href} className="group block h-full">
      <Card className="h-full rounded-lg transition-colors hover:border-primary/40 hover:bg-accent/40">
        <CardHeader>
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="flex size-10 items-center justify-center rounded-md border bg-background">
              <Box className="size-5 text-primary" aria-hidden="true" />
            </div>
            <Badge variant="secondary" className="rounded-md">
              成熟度 {framework.maturity}
            </Badge>
          </div>
          <CardTitle className="flex items-center justify-between gap-3 text-base">
            {framework.name}
            <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-muted-foreground">{framework.description}</p>
          <div className="rounded-md border bg-muted/40 p-3 text-sm">
            <span className="font-medium">适合：</span>
            <span className="text-muted-foreground">{framework.bestFor}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {framework.tags.map((tag) => (
              <span key={tag} className="font-mono text-[11px] text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
