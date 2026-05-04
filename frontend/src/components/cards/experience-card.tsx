import type { Experience } from "@/types/site.type";
import { Card } from "@/components/ui/card";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-violet-400 to-orange-300" />
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
        {experience.period}
      </p>
      <h3 className="mt-3 text-xl font-bold text-white">{experience.role}</h3>
      <p className="text-sm text-violet-200">{experience.company}</p>
      <p className="mt-4 text-sm leading-6 text-slate-300">
        {experience.description}
      </p>
    </Card>
  );
}
