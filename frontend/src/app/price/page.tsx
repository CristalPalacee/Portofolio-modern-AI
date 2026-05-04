import type { Metadata } from "next";
import { PriceCard } from "@/components/cards/price-card";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectFitQuiz } from "@/components/sections/project-fit-quiz";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { PricingSupportSection } from "@/components/sections/pricing-support-section";
import { pricingPlans } from "@/data/pricing";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Price - Bigboss Portfolio",
  description:
    "Daftar paket jasa portfolio dan web static dalam Rupiah, mulai dari Basic sampai Premium.",
  path: "/price/",
});

export default function PricePage() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Price
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
            Paket jasa dalam Rupiah, jelas dari awal.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Pilih paket sesuai kebutuhan. Semua paket tetap mengikuti prinsip
            static website: cepat, rapi, dan tanpa backend yang tidak perlu.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <StaggerItem duration={1} blur={10} delay={index * 0.2} key={plan.name}>
              <PriceCard plan={plan} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.16} className="mt-10 text-center text-sm text-slate-400">
          Harga bisa berubah sesuai scope, revisi, asset, dan kebutuhan custom.
        </FadeIn>

        <ProjectFitQuiz />

        <PricingSupportSection />
      </div>
    </section>
  );
}
