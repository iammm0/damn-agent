import { Badge } from "@/components/ui/badge";
import type { Difficulty } from "@/lib/site";
import { cn } from "@/lib/utils";

const styles: Record<Difficulty, string> = {
  入门: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  进阶: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  工程: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  综合: "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

export function DifficultyBadge({
  difficulty,
  className,
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  return (
    <Badge variant="outline" className={cn("rounded-md font-medium", styles[difficulty], className)}>
      {difficulty}
    </Badge>
  );
}
