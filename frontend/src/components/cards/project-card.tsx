import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project.type";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <Link href={`/projects/${project.slug}/`} className="block">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent" />
          <Badge className="absolute left-4 top-4">{project.category}</Badge>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                {project.year}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/6 text-white transition group-hover:bg-cyan-300 group-hover:text-slate-950">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
