import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          404
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
          Halaman ini nyasar ke orbit lain.
        </h1>
        <p className="mt-5 text-slate-300">
          Link yang kamu buka belum tersedia di static portfolio ini.
        </p>
        <div className="mt-8">
          <Button href="/">Kembali Home</Button>
        </div>
        <Link href="/projects/" className="mt-5 inline-block text-sm text-cyan-200">
          Atau lihat projects
        </Link>
      </div>
    </section>
  );
}
