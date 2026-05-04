import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { blogPosts } from "@/data/blog-posts";
import { createMetadata } from "@/lib/seo";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Blog Not Found - Bigboss Portfolio",
      path: "/blog/",
    });
  }

  return createMetadata({
    title: `${post.title} - Bigboss Blog`,
    description: post.excerpt,
    image: post.featuredImage,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} className="text-cyan-200" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} className="text-cyan-200" />
              {post.readTime}
            </span>
          </div>
        </FadeIn>

        {post.featuredImage ? (
          <FadeIn delay={0.14}>
            <Card className="relative mt-10 aspect-[16/9] overflow-hidden p-0">
              <Image
                src={post.featuredImage}
                alt={`${post.title} cover`}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
              />
            </Card>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.18}>
          <Card className="mt-10 space-y-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Card>
        </FadeIn>
      </div>
    </article>
  );
}
