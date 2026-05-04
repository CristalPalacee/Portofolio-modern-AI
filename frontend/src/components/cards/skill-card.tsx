import type { Skill } from "@/types/skill.type";
import { Card } from "@/components/ui/card";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white">{skill.name}</h3>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {skill.category}
          </p>
        </div>
        <span className="text-sm font-black text-cyan-200">{skill.level}%</span>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-400 via-cyan-300 to-orange-300"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </Card>
  );
}
