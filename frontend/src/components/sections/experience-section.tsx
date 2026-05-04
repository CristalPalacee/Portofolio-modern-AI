import { experiences } from "@/data/experience";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer,} from "@/components/motion/stagger-container";
import { ScrollFromTop } from "../motion/scroll-reveal";

export function ExperienceSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-2xl">

          <ScrollFromTop duration={2} delay={0.2} blur={6}>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Experience
          </p>
          </ScrollFromTop>

               <ScrollFromTop duration={2} delay={0.1} blur={6}>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Dari ide mentah sampai interface yang bisa dipercaya.
          </h2>
               </ScrollFromTop>
        </FadeIn>
        <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <ScrollFromTop key={`${experience.role}-${experience.period}`} distance={40} delay={index * 0.15} duration={0.8} blur={10}>
              <ExperienceCard experience={experience} />
            </ScrollFromTop>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
