import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Resource } from "@/lib/site";

export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="rounded-lg border bg-card">
      {resources.map((resource, index) => (
        <div key={resource.title}>
          <Link
            href={resource.href}
            className="group flex flex-col gap-3 p-4 transition-colors hover:bg-accent/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{resource.title}</h3>
                <Badge variant="secondary" className="rounded-md">
                  {resource.type}
                </Badge>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{resource.description}</p>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          {index < resources.length - 1 ? <Separator /> : null}
        </div>
      ))}
    </div>
  );
}
