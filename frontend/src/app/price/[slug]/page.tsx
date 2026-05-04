import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Clock,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ScrollFromBottom } from "@/components/motion/scroll-reveal";
import { pricingPlansId } from "@/data/price";

export function generateStaticParams() {
  return pricingPlansId.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PricePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const price = pricingPlansId.find((item) => item.slug === slug);

  if (!price) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-28 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-52 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 lg:pt-36">
        <FadeIn blur={10} duration={0.8}>
          <Button
            href="/price"
            variant="ghost"
            className="mb-8 rounded-full text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="mr-2 size-4" />
            Kembali ke Pricing
          </Button>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          {/* Left content */}
          <div>
            <FadeIn blur={14} duration={0.9}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
                <Sparkles className="size-4" />
                Paket {price.name}
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                {price.label}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {price.description}
              </p>
            </FadeIn>

            <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2">
              <ScrollFromBottom
                className="h-full"
                delay={0.1}
                blur={12}
                duration={0.8}
              >
                <div className="flex h-full min-h-32 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/4 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
                  <p className="min-h-6 text-sm font-semibold text-slate-400">
                    Harga mulai dari
                  </p>

                  <p className="mt-5 text-4xl font-black leading-none tracking-[-0.04em] text-white">
                    {price.price}
                  </p>
                </div>
              </ScrollFromBottom>

              <ScrollFromBottom
                className="h-full"
                delay={0.2}
                blur={12}
                duration={0.8}
              >
                <div className="flex h-full min-h-32 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/4 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                  <div className="flex min-h-6 items-center gap-2 text-slate-400">
                    <Clock className="size-4 text-cyan-200" />
                    <p className="text-sm font-semibold">Estimasi pengerjaan</p>
                  </div>

                  <p className="mt-5 text-4xl font-black leading-none tracking-[-0.04em] text-white">
                    {price.timeline}
                  </p>
                </div>
              </ScrollFromBottom>
            </div>

            <ScrollFromBottom delay={0.3} blur={14} duration={0.9}>
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Sparkles className="size-5" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
                      Detail Paket
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                      Penjelasan lengkap tentang paket {price.name}.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {price.longDescription.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollFromBottom>

            <ScrollFromBottom delay={0.4} blur={14} duration={0.9}>
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Check className="size-5" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black tracking-[-0.04em] text-white">
                      Fitur yang didapat
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                      Semua fitur utama yang termasuk dalam paket ini.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {price.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-cyan-200" />
                      <span className="text-sm leading-6 text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFromBottom>
          </div>

          {/* Right sticky card */}
          <aside className="lg:sticky lg:top-28 lg:pt-44 xl:pt-52">
            <ScrollFromBottom delay={0.2} blur={16} duration={1}>
              <div className="flex min-h-[520px] flex-col rounded-[2rem] border border-cyan-300/30 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                <div className="flex min-h-8 items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
                    {price.name}
                  </p>

                  {price.recommended ? (
                    <div className="inline-flex rounded-full bg-cyan-300 px-4 py-1 text-xs font-black text-slate-950">
                      Recommended
                    </div>
                  ) : null}
                </div>

                <h2 className="mt-4 text-4xl font-black leading-none tracking-tighter text-white">
                  {price.price}
                </h2>

                <p className="mt-4 min-h-12 text-sm leading-6 text-slate-400">
                  {price.description}
                </p>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="size-4 text-cyan-200" />
                      <p className="text-xs font-semibold">
                        Estimasi pengerjaan
                      </p>
                    </div>

                    <p className="text-sm font-black text-white">
                      {price.timeline}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                    Termasuk
                  </p>

                  <div className="mt-4 space-y-3">
                    {price.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="mt-1 size-4 shrink-0 text-cyan-200" />
                        <p className="text-sm leading-6 text-slate-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-6 h-px bg-white/10" />

                <Button
                  href="/contact"
                  className="mt-auto h-12 w-full rounded-full bg-white font-bold text-slate-950 hover:bg-cyan-200"
                >
                  Konsultasi Paket
                </Button>

                <Button
                  href="/price"
                  className="mt-3 h-12 w-full rounded-full border-white/10 bg-white/[0.03] text-white hover:bg-white/10"
                >
                  Lihat Paket Lain
                </Button>

                <p className="mt-5 text-center text-xs leading-6 text-slate-500">
                  Harga bisa berubah sesuai scope, revisi, asset, dan kebutuhan
                  custom.
                </p>
              </div>
            </ScrollFromBottom>
          </aside>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ScrollFromBottom delay={0.1} blur={12} duration={0.8}>
            <InfoBlock
              icon={<Target className="size-5" />}
              title="Cocok untuk"
              items={price.suitableFor}
            />
          </ScrollFromBottom>

          <ScrollFromBottom delay={0.2} blur={12} duration={0.8}>
            <InfoBlock
              icon={<Check className="size-5" />}
              title="Deliverables"
              items={price.deliverables}
            />
          </ScrollFromBottom>

          <ScrollFromBottom delay={0.3} blur={12} duration={0.8}>
            <InfoBlock
              icon={<Workflow className="size-5" />}
              title="Workflow"
              items={price.process}
            />
          </ScrollFromBottom>
        </div>
      </section>
    </main>
  );
}

type InfoBlockProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

function InfoBlock({ icon, title, items }: InfoBlockProps) {
  return (
    <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
          {icon}
        </div>

        <h3 className="text-xl font-black tracking-[-0.03em] text-white">
          {title}
        </h3>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <Check className="mt-1 size-4 shrink-0 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
