"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/constants";
import { profile } from "@/data/profile";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div className="absolute inset-x-4 top-24 rounded-[1.5rem] border border-white/10 bg-[#07111f]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950"
            >
              Download CV
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
