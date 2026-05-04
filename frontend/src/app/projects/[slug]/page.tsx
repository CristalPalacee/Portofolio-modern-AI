import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return createMetadata({
      title: "Project Not Found - Bigboss Portfolio",
      path: "/projects/",
    });
  }

  return createMetadata({
    title: `${project.title} - Bigboss Portfolio`,
    description: project.description,
    image: project.image,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <FadeIn>
            <Card className="relative aspect-[16/10] overflow-hidden p-0">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Card>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-7">
            <div>
              <Badge>{project.category}</Badge>
              <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                {project.longDescription}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Card className="p-4">
                <p className="text-xs text-slate-500">Year</p>
                <p className="mt-1 font-bold text-white">{project.year}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-slate-500">Type</p>
                <p className="mt-1 font-bold text-white">{project.category}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-slate-500">Mode</p>
                <p className="mt-1 font-bold text-white">Static</p>
              </Card>
            </div>

            <Card>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Impact
              </p>
              <p className="mt-3 text-slate-300">{project.impact}</p>
            </Card>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={project.liveUrl}>
                <ExternalLink className="mr-2" size={17} />
                Live Demo
              </Button>
              <Button href={project.githubUrl} variant="ghost">
                <Code2 className="mr-2" size={17} />
                GitHub
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
