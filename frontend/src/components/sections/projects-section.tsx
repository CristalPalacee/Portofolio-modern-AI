import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, } from "@/components/motion/stagger-container";
import { ScrollFromRight, ScrollFromTop } from "../motion/scroll-reveal";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <ScrollFromTop duration={2} >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
                Featured Projects
              </p>
            </ScrollFromTop>
              <ScrollFromTop  duration={2} >

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Projects Yang Telah Saya buat.
            </h2>
              </ScrollFromTop>
          </div>
            <ScrollFromRight  duration={2} >
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            Semua project
            <ArrowRight size={16} />
          </Link>
            </ScrollFromRight>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollFromTop key={project.slug} delay={index * 0.09} duration={2} blur={8}>
              <ProjectCard project={project} /> 
            </ScrollFromTop>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
