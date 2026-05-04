import type { Metadata } from "next";
import { BlogCard } from "@/components/cards/blog-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { blogPosts } from "@/data/blog-posts";
import { createMetadata } from "@/lib/seo";
import { ScrollFromLeft, ScrollFromRight } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = createMetadata({
  title: "Blog - Bigboss Portfolio",
  description:
    "Artikel static tentang Next.js, workflow frontend cepat, dan UI futuristic.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Blog
          </p>
          <ScrollFromLeft duration={2} blur={10} delay={0.2}>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
            Catatan singkat tentang web cepat dan UI yang berkarakter.
          </h1>
          </ScrollFromLeft>
             <ScrollFromRight duration={2} blur={10} delay={0.2}>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Semua artikel di halaman ini berasal dari data lokal dan ikut
            digenerate sebagai static page saat build.
          </p>
             </ScrollFromRight>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <StaggerItem duration={1} blur={10} delay={index *0.2} key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
