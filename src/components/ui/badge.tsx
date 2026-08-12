import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  outline: "border-border bg-transparent text-muted",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
} as const;

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof badgeVariants;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
