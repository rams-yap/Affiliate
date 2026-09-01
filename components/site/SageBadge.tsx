import { Leaf } from "lucide-react";
import type { ReactNode } from "react";

interface SageBadgeProps {
  children: ReactNode;
  variant?: "default" | "solid" | "high-contrast";
}

export function SageBadge({ children, variant = "default" }: SageBadgeProps) {
  if (variant === "solid" || variant === "high-contrast") {
    return (
      <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-sage dark:bg-sage px-3.5 py-1 text-sm font-bold text-white dark:text-slate-950 shadow-sm">
        <Leaf className="h-3.5 w-3.5 text-white dark:text-slate-950" strokeWidth={2.5} />
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex self-start items-center gap-1.5 rounded-full bg-sage/10 dark:bg-sage/20 px-3.5 py-1 text-sm font-bold text-sage dark:text-sage border border-sage/20">
      <Leaf className="h-3.5 w-3.5 text-sage dark:text-sage" strokeWidth={2.5} />
      {children}
    </span>
  );
}
