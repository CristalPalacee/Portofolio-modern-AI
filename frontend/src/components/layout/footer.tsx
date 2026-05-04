import Link from "next/link";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>Built static with Next.js, Tailwind CSS, and a little neon mischief.</p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-cyan-200"
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
