import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-5 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size[80px_80px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative flex flex-col items-center gap-5 rounded-[2rem] border border-white/10 bg-white/4 px-8 py-10 text-center shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="flex size-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
          <LoaderCircle className="size-8 animate-spin" />
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">
            Loading
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Menyiapkan detail paket...
          </p>
        </div>
      </div>
    </main>
  );
}
