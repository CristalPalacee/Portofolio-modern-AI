import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { ScrollFromLeft, ScrollFromRight, ScrollFromTop } from "../motion/scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-y-8 lg:grid-cols-[1.08fr_1.3fr] lg:gap-x-20">

        {/* HEADING KIRI */}
        <FadeIn className="lg:col-start-1 lg:row-start-1">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            About
          </p>
          <ScrollFromTop duration={2} blur={6}>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Kode rapi, visual berani, dan performa tetap sat set.
            </h2>
          </ScrollFromTop>
        </FadeIn>

        {/* SPACER KANAN SUPAYA CARD KANAN  */}
        <div className="hidden lg:block lg:col-start-2 lg:row-start-1" />

        {/* PROFILE CARD KIRI */}
        <FadeIn className="lg:col-start-1 lg:row-start-2">

          <ScrollFromLeft duration={2} blur={10}>

            <Card className="relative overflow-hidden p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.24),transparent_58%)]" />

              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-[4.5rem] border border-white/10 bg-white/5">
                  <Image
                    src="/images/avatar.svg"
                    alt={`${profile.name} profile avatar`}
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                  <h3 className="text-2xl font-black text-white">
                    {profile.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-cyan-200">
                    {profile.role}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {profile.location} based builder with a taste for fast static
                    websites and sharp UI systems.
                  </p>
                </div>
              </div>
            </Card>

          </ScrollFromLeft>

        </FadeIn>

        {/* CARD KANAN */}
        <FadeIn
          delay={0.1}
          className="lg:col-start-2 lg:row-start-2"
        >
          <ScrollFromRight duration={2} blur={10}>
            <Card className="h-full text-base leading-8 text-slate-300">
              <p>
                Portfolio ini dibuat sebagai static menggunakan SSG ( Server Side Generation ) dengan website modern: semua konten
                berasal dari file TypeScript lokal, tanpa backend, tanpa database,
                dan tanpa API route. Cocok untuk deploy cepat ke Vercel, Netlify,
                Cloudflare Pages, atau static hosting biasa.
              </p>

              <p className="mt-5">
                Arah desainnya dark futuristic dengan glassmorphism, gradient mesh,
                bento cards, dan animasi halus supaya terasa premium tanpa membuat
                halaman berat.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Static", "Responsive", "SEO Ready"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/4.5 px-4 py-3 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </ScrollFromRight>
        </FadeIn>
      </div>
    </section>
  );
}