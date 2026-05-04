import { Check, HelpCircle, Minus, Plus, Sparkles, TableProperties } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlansId } from "@/data/price";

type CompareCell = string | boolean;

type CompareRow = {
  label: string;
  values: Record<string, CompareCell>;
};

const compareRows: CompareRow[] = [
  {
    label: "Jumlah halaman",
    values: {
      basic: "1 landing page",
      pro: "Home, projects, blog",
      premium: "Custom multi-page",
      "max-web-ai": "Custom + AI flow",
    },
  },
  {
    label: "Detail project",
    values: {
      basic: false,
      pro: true,
      premium: true,
      "max-web-ai": true,
    },
  },
  {
    label: "Blog static",
    values: {
      basic: false,
      pro: true,
      premium: true,
      "max-web-ai": true,
    },
  },
  {
    label: "Visual direction custom",
    values: {
      basic: false,
      pro: "Basic polish",
      premium: true,
      "max-web-ai": true,
    },
  },
  {
    label: "Integrasi AI",
    values: {
      basic: false,
      pro: false,
      premium: false,
      "max-web-ai": true,
    },
  },
  {
    label: "Dokumentasi edit konten",
    values: {
      basic: true,
      pro: true,
      premium: true,
      "max-web-ai": true,
    },
  },
];

const addOns = [
  {
    name: "Setup domain dan hosting",
    price: "Mulai Rp 250.000",
    description:
      "Bantuan menghubungkan domain, hosting, dan konfigurasi deploy awal.",
  },
  {
    name: "Tambah halaman custom",
    price: "Mulai Rp 300.000 / halaman",
    description:
      "Untuk halaman tambahan seperti services, case study, atau landing campaign.",
  },
  {
    name: "Maintenance bulanan",
    price: "Mulai Rp 500.000 / bulan",
    description:
      "Update konten, perbaikan minor, monitoring ringan, dan support teknis.",
  },
  {
    name: "Fitur AI tambahan",
    price: "By scope",
    description:
      "Generator, chatbot, summary, rekomendasi, atau workflow AI yang lebih spesifik.",
  },
];

const faqs = [
  {
    question: "Apakah harga bisa berubah?",
    answer:
      "Bisa, kalau scope bertambah seperti jumlah halaman, revisi besar, asset custom, integrasi API, atau fitur AI tambahan.",
  },
  {
    question: "Apakah sudah termasuk deploy?",
    answer:
      "Website dibuat siap deploy. Bantuan setup domain, hosting, atau platform deploy bisa ditambahkan sebagai add-on jika dibutuhkan.",
  },
  {
    question: "Berapa kali revisi yang termasuk?",
    answer:
      "Setiap paket sudah termasuk revisi ringan saat proses finalisasi. Revisi besar yang mengubah struktur atau arah visual akan dihitung berdasarkan scope.",
  },
  {
    question: "Apakah bisa pakai domain sendiri?",
    answer:
      "Bisa. Website dapat diarahkan ke domain pribadi selama akses DNS dan platform hosting tersedia.",
  },
  {
    question: "Apakah termasuk copywriting dan desain?",
    answer:
      "Termasuk penyusunan copy dasar dan layout sesuai paket. Untuk arahan visual, copywriting panjang, atau strategi konten yang lebih matang, paket Premium dan Max Web AI lebih cocok.",
  },
];

export function PricingSupportSection() {
  return (
    <div className="mt-24 space-y-24">
      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <TableProperties className="mr-2 size-3.5" />
              Compare Packages
            </Badge>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Bandingkan paket sebelum pilih.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Lihat perbedaan fitur utama supaya kamu bisa memilih paket yang
            paling pas dengan kebutuhan website.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="min-w-[920px]">
            <div className="grid grid-cols-[1.2fr_repeat(4,1fr)] border-b border-white/10">
              <div className="p-5 text-sm font-bold text-slate-400">Fitur</div>
              {pricingPlansId.map((plan) => (
                <div key={plan.slug} className="border-l border-white/10 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                    {plan.name}
                  </p>
                  <p className="mt-3 text-xl font-black text-white">
                    {plan.price}
                  </p>
                </div>
              ))}
            </div>

            {compareRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.2fr_repeat(4,1fr)] border-b border-white/10 last:border-b-0"
              >
                <div className="p-5 text-sm font-semibold text-slate-200">
                  {row.label}
                </div>
                {pricingPlansId.map((plan) => (
                  <div
                    key={`${row.label}-${plan.slug}`}
                    className="border-l border-white/10 p-5 text-sm leading-6 text-slate-300"
                  >
                    <CompareValue value={row.values[plan.slug]} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <Plus className="mr-2 size-3.5" />
              Add-ons
            </Badge>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Tambahan sesuai kebutuhan project.
            </h2>
          </div>
          <Button href="/contact/" variant="ghost">
            Diskusi add-on
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {addOns.map((item) => (
            <Card key={item.name} className="flex h-full flex-col p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <Sparkles className="size-5" />
              </div>
              <h3 className="mt-5 min-h-14 text-xl font-black tracking-[-0.03em] text-white">
                {item.name}
              </h3>
              <p className="mt-3 text-sm font-bold text-cyan-200">
                {item.price}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <HelpCircle className="mr-2 size-3.5" />
            FAQ
          </Badge>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Pertanyaan yang sering muncul.
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold text-white">
                {item.question}
                <Plus className="size-5 shrink-0 text-cyan-200 transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

type CompareValueProps = {
  value: string | boolean | undefined;
};

function CompareValue({ value }: CompareValueProps) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-2 font-semibold text-cyan-200">
        <Check className="size-4" />
        Ya
      </span>
    );
  }

  if (value === false || value === undefined) {
    return (
      <span className="inline-flex items-center gap-2 text-slate-500">
        <Minus className="size-4" />
        Tidak
      </span>
    );
  }

  return <span>{value}</span>;
}
