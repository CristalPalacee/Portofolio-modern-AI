import { skills } from "@/data/skills";
import { SkillCard } from "@/components/cards/skill-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer,  } from "@/components/motion/stagger-container";
import { ScrollFromTop } from "../motion/scroll-reveal";

export function SkillsSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Skills
          </p>
          <ScrollFromTop duration={2}>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Stack yang dipakai untuk bikin web cepat dan kinclong.
          </h2>
          </ScrollFromTop>
        </FadeIn>
        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <ScrollFromTop key={skill.name} delay={index * 0.08} duration={1} blur={10}>
              <SkillCard skill={skill} />
            </ScrollFromTop>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
