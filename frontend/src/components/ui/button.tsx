import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        variant === "primary" &&
          "bg-white text-slate-950 shadow-[0_0_40px_rgba(139,92,246,0.45)] hover:scale-[1.02] hover:bg-cyan-200",
        variant === "ghost" &&
          "border border-white/15 bg-white/[0.03] text-white hover:border-cyan-300/60 hover:bg-cyan-300/10",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
