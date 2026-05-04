"use client";

import { ArrowRight, Bot, BriefcaseBusiness, Check, LayoutTemplate, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlansId } from "@/data/price";
import { cn } from "@/lib/utils";

const quizOptions = [
  {
    id: "basic",
    label: "Butuh portfolio sederhana",
    description: "Untuk profil, skill, project pilihan, dan kontak.",
    icon: LayoutTemplate,
  },
  {
    id: "pro",
    label: "Butuh project detail + blog",
    description: "Untuk portfolio yang lebih lengkap dan SEO-friendly.",
    icon: BriefcaseBusiness,
  },
  {
    id: "premium",
    label: "Butuh visual premium",
    description: "Untuk personal brand yang lebih custom dan matang.",
    icon: Sparkles,
  },
  {
    id: "max-web-ai",
    label: "Butuh fitur AI",
    description: "Untuk web interaktif dengan AI assistant atau automation.",
    icon: Bot,
  },
];

export function ProjectFitQuiz() {
  const [selectedId, setSelectedId] = useState(quizOptions[0].id);

  const selectedPlan = useMemo(
    () => pricingPlansId.find((plan) => plan.slug === selectedId),
    [selectedId],
  );

  if (!selectedPlan) {
    return null;
  }

  return (
    <section className="mt-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div>
          <Badge className="border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <Check className="mr-2 size-3.5" />
            Project Fit Quiz
          </Badge>
          <h2 className="mt-5 max-w-xl text-4xl font-black tracking-tighter text-white sm:text-5xl">
            Pilih kebutuhanmu, lihat paket yang paling cocok.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
            Mini quiz ini membantu mempercepat keputusan tanpa harus membaca
            semua detail paket dari awal.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-3">
            {quizOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = option.id === selectedId;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedId(option.id)}
                  className={cn(
                    "flex min-h-24 w-full items-center gap-4 rounded-[1.5rem] border p-4 text-left transition duration-300",
                    isSelected
                      ? "border-cyan-300/50 bg-cyan-300/10 shadow-2xl shadow-cyan-500/10"
                      : "border-white/10 bg-white/4 hover:border-white/20 hover:bg-white/[0.07]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-2xl",
                      isSelected
                        ? "bg-cyan-300 text-slate-950"
                        : "bg-cyan-300/10 text-cyan-200",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-base font-black text-white">
                      {option.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-400">
                      {option.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <Card className="flex h-full min-h-105 flex-col border-cyan-300/30 bg-slate-950/70 p-6">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">
              Rekomendasi
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
              {selectedPlan.name}
            </h3>
            <p className="mt-3 text-4xl font-black leading-none tracking-tighter text-white">
              {selectedPlan.price}
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              {selectedPlan.description}
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/4 p-4">
              <p className="text-xs font-semibold text-slate-400">
                Estimasi pengerjaan
              </p>
              <p className="mt-2 text-lg font-black text-white">
                {selectedPlan.timeline}
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {selectedPlan.features.slice(0, 3).map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-cyan-200" />
                  <p className="text-sm leading-6 text-slate-300">{feature}</p>
                </div>
              ))}
            </div>

            <Button
              href={`/price/${selectedPlan.slug}/`}
              className="mt-auto h-12 w-full"
            >
              Lihat Detail Paket
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
