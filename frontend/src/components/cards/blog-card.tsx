import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog.type";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <Link href={`/blog/${post.slug}/`} className="block">
        {post.featuredImage ? (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={`${post.title} cover`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>
        ) : null}
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              <Clock size={14} />
              {post.readTime}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">{post.title}</h3>
          </div>
          <p className="text-sm leading-6 text-slate-300">{post.excerpt}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-white">
            Read article
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </Card>
  );
}
