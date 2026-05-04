import Link from "next/link";
import { Download } from "lucide-react";
import { navItems } from "@/lib/constants";
import { profile } from "@/data/profile";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-sm font-black text-cyan-200 shadow-lg shadow-cyan-500/10">
            BB
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">
              AnonyMous
            </span>
            <span className="text-xs text-slate-400">Static Portfolio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            <Download size={16} />
            Download CV
          </Link>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
