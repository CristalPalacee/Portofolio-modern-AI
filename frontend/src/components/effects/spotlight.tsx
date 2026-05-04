import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
};

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.24),transparent_62%)] blur-2xl",
        className,
      )}
    />
  );
}
