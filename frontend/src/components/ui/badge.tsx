import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
