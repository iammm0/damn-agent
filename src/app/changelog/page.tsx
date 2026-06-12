import type { Metadata } from "next";
import { PageIntro, PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { changelog } from "@/lib/site";

export const metadata: Metadata = {
  title: "更新记录",
  description: "Agent Atlas 内容与工程更新记录。",
};

export default function ChangelogPage() {
  return (
    <PageShell activeHref="/changelog">
      <PageIntro
        eyebrow="Changelog"
        title="更新记录"
        description="记录文档结构、内容补充和工程能力的变化，方便后续持续维护。"
      />
      <div className="grid gap-4">
        {changelog.map((entry) => (
          <Card key={entry.date} className="rounded-lg">
            <CardHeader>
              <p className="font-mono text-sm text-muted-foreground">{entry.date}</p>
              <CardTitle className="text-base">{entry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {entry.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
