import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ScrollFromBottom, ScrollFromTop } from "../motion/scroll-reveal";

export function CtaSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <FadeIn className="mx-auto max-w-4xl rounded-4xl border border-white/10 bg-linear-to-br from-white/10 to-white/3 p-8 text-center shadow-2xl shadow-black/30">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200">
          Ready
        </p>
        <ScrollFromTop duration={1} delay={0.2} blur={6} >
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Static, cepat, dan tetap kelihatan mahal.
          </h2>
        </ScrollFromTop>
        <ScrollFromBottom duration={2} delay={0.3} blur={6} >
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Semua konten bisa kamu edit dari folder `src/data`, jadi gampang
            disesuaikan tanpa menyentuh backend apa pun.
          </p>
        </ScrollFromBottom>
        <ScrollFromBottom duration={3} delay={0.5} blur={6} >
          <Button href="/contact/" className="mt-8">
            Mulai ngobrol
            <ArrowRight className="ml-2" size={17} />
          </Button>
        </ScrollFromBottom>
      </FadeIn>
    </section>
  );
}
