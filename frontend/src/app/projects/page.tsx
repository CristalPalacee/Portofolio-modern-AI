import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects - Bigboss Portfolio",
  description: "Kumpulan project static portfolio, landing page, dan web showcase modern.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn duration={0.9} blur={10} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Projects
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
            Project showcase yang dibangun dari data lokal.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Tidak ada API atau database. Semua project di halaman ini berasal
            dari `src/data/projects.ts` dan diekspor menjadi static page.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem duration={1} delay={index * 0.2} blur={10} key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
