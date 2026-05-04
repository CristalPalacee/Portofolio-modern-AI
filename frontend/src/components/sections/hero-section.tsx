import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { siteStats } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SlideUp } from "@/components/motion/slide-up";
import { TextReveal } from "@/components/motion/text-reveal";
import { TypewriterHeadline } from "@/components/motion/typewriter-headline";
import { ScrollFromLeft, ScrollFromRight, ScrollFromTop } from "../motion/scroll-reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <SlideUp className=" space-y-6 sm:space-y-8">
          <Badge className="w-fit max-w-full gap-2 border-cyan-300/20 bg-cyan-300/10 text-[0.68rem] text-cyan-100 sm:text-xs">
            <Sparkles size={14} />
            Available for modern static portfolio builds
          </Badge>

          <div className="min-w-0 space-y-4 sm:space-y-5">

            <ScrollFromLeft duration={2}>
              <h1 className="max-w-5xl wrap-break-words text-[clamp(2.35rem,13vw,4.5rem)] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                <TextReveal text={profile.headline1} />
              </h1>
            </ScrollFromLeft>

            <h2 className="min-h-18 max-w-full text-xl font-bold leading-snug tracking-[-0.04em] text-slate-300 sm:min-h-20 sm:text-3xl lg:text-3xl">
              <TypewriterHeadline
                words={profile.typewriterPhrases}
                fallback={profile.headline}
                className="inline whitespace-normal wrap-break-words wrap-anywhere"
              />
            </h2>
            <ScrollFromRight duration={2}>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {profile.description}
              </p>
            </ScrollFromRight>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ScrollFromLeft duration={1}>
              <Button href="/projects/" className="w-full sm:w-auto">
                Lihat Projects
                <ArrowRight className="ml-2" size={17} />
              </Button>
            </ScrollFromLeft>

            <ScrollFromRight duration={1} delay={0.2}>
              <Button href="/contact/" variant="ghost" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </ScrollFromRight>
          </div>

          <ScrollFromTop>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400 sm:gap-4">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-cyan-200" />
                {profile.location}
              </span>
              <span>{profile.role}</span>
            </div>
          </ScrollFromTop>
        </SlideUp>

        <ScrollFromRight duration={2}>
          <SlideUp className="relative min-w-0">
            <Card className="relative max-w-full overflow-hidden p-4 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.22),transparent_42%)]" />
              <div className="relative min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-300" />
                </div>
                <pre className="max-w-full whitespace-pre-wrap wrap-break-words text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
                  <code>{`const portfolio = {
                  stack: "Next.js static",
                  style: "dark futuristic",
                  data: "src/data",
                  backend: false,
                  status: "ready to ship"
                };`}</code>
                </pre>
              </div>
              <div className="relative mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                {siteStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/5.5 p-3 sm:p-4"
                  >
                    <p className="text-xl font-black text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 truncate text-[0.65rem] text-slate-400 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </SlideUp>
        </ScrollFromRight>
      </div>
    </section>
  );
}
