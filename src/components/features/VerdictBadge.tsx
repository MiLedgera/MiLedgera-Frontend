import { cn } from "@/lib/utils";
import type { Verdict } from "@/types";

const verdictStyles: Record<Verdict, string> = {
  ALLOW: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  WARN: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  BLOCK: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
};

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        verdictStyles[verdict],
      )}
    >
      {verdict}
    </span>
  );
}
