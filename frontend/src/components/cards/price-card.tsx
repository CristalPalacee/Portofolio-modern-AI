import { Check, Sparkles } from "lucide-react";
import type { PricingPlan } from "@/types/pricing.type";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PriceCardProps = {
  plan: PricingPlan;
};

export function PriceCard({ plan }: PriceCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full min-h-[580px] flex-col overflow-hidden transition duration-300 hover:-translate-y-1",
        plan.recommended && "border-cyan-300/45 bg-cyan-300/[0.08]",
      )}
    >
      {plan.recommended ? (
        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
          <Sparkles size={13} />
          Recommended
        </div>
      ) : null}

      <div className="flex min-h-52 flex-col">
        <p className="min-h-6 pr-32 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
          {plan.name}
        </p>

        <h3 className="mt-4 flex min-h-20 items-end text-4xl font-black leading-none tracking-[-0.04em] text-white">
          {plan.price}
        </h3>

        <p className="mt-5 min-h-24 text-sm leading-6 text-slate-300">
          {plan.description}
        </p>
      </div>

      <div className="mb-7 h-px bg-white/10" />

      <ul className="grid flex-1 gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex min-h-12 gap-3 text-sm leading-6 text-slate-300"
          >
            <Check className="mt-1 shrink-0 text-cyan-200" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href={`/price/${plan.slug}`} className="mt-8 w-full">
        Lihat Detail
      </Button>
    </Card>
  );
}
