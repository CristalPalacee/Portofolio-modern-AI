Workflow Project Portfolio Static
1. Tujuan Project

Membuat website portfolio static modern dengan Next.js yang berisi:

- Homepage portfolio
- About section
- Skills section
- Project showcase
- Project detail page
- Contact section
- Download CV
- Animasi modern
- Tema dark futuristic / Gen Z style

Website ini tidak memakai backend sama sekali.

Artinya:

- Tidak ada NestJS
- Tidak ada Prisma
- Tidak ada database
- Tidak ada API route
- Tidak ada auth
- Tidak ada dashboard
- Tidak ada server action untuk mutation

Semua data disimpan secara lokal di folder:

src/data/
2. Tech Stack
Framework       : Next.js App Router
Language        : TypeScript
Styling         : Tailwind CSS
Animation       : Framer Motion
UI Effect       : React Bits
UI Component    : Magic UI
Icon            : Lucide React
Data Source     : Local TypeScript file
Deployment      : Vercel / Static Hosting
Backend         : Tidak ada
Database        : Tidak ada
3. Workflow Utama

Urutan pengerjaan project:

1. Setup project Next.js
2. Setup static export
3. Setup Tailwind CSS
4. Setup shadcn/ui jika dibutuhkan
5. Setup Magic UI
6. Setup Framer Motion
7. Setup struktur folder
8. Buat folder docs untuk dokumentasi
9. Buat data portfolio lokal
10. Buat layout utama
11. Buat homepage section
12. Buat halaman projects
13. Buat halaman detail project
14. Buat halaman contact
15. Tambahkan animasi dan visual effect
16. Optimasi SEO
17. Optimasi responsive mobile
18. Build static
19. Deploy
4. Struktur Folder Profesional

Gunakan struktur seperti ini:

portfolio-modern/
├── docs/
│   ├── README.md
│   ├── workflow.md
│   ├── folder-structure.md
│   ├── tech-stack.md
│   ├── design-system.md
│   ├── animation-guideline.md
│   ├── seo-guideline.md
│   └── deployment.md
│
├── public/
│   ├── images/
│   │   ├── avatar.png
│   │   ├── og-image.png
│   │   ├── projects/
│   │   │   ├── project-1.png
│   │   │   ├── project-2.png
│   │   │   └── project-3.png
│   │   └── logos/
│   │       ├── nextjs.svg
│   │       ├── react.svg
│   │       └── typescript.svg
│   │
│   ├── resume.pdf
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── footer.tsx
│   │   │   └── page-wrapper.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── cta-section.tsx
│   │   │
│   │   ├── cards/
│   │   │   ├── project-card.tsx
│   │   │   ├── skill-card.tsx
│   │   │   ├── service-card.tsx
│   │   │   └── experience-card.tsx
│   │   │
│   │   ├── effects/
│   │   │   ├── gradient-background.tsx
│   │   │   ├── grid-background.tsx
│   │   │   ├── spotlight.tsx
│   │   │   └── floating-orbs.tsx
│   │   │
│   │   ├── motion/
│   │   │   ├── fade-in.tsx
│   │   │   ├── slide-up.tsx
│   │   │   ├── stagger-container.tsx
│   │   │   └── text-reveal.tsx
│   │   │
│   │   └── ui/
│   │       └── ...
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── services.ts
│   │   ├── experience.ts
│   │   └── social-links.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── site-config.ts
│   │   ├── seo.ts
│   │   └── constants.ts
│   │
│   ├── types/
│   │   ├── project.type.ts
│   │   ├── skill.type.ts
│   │   ├── service.type.ts
│   │   └── site.type.ts
│   │
│   └── styles/
│       └── theme.css
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
5. Fungsi Folder docs/

Folder docs/ digunakan untuk menyimpan dokumentasi internal project.

Tujuannya agar project terlihat lebih profesional dan mudah dipahami ketika dibuka lagi nanti.

Isi folder docs/
docs/
├── README.md
├── workflow.md
├── folder-structure.md
├── tech-stack.md
├── design-system.md
├── animation-guideline.md
├── seo-guideline.md
└── deployment.md
docs/README.md

Isi:

# Portfolio Modern Documentation

Dokumentasi ini menjelaskan workflow, struktur folder, tech stack, design system, animasi, SEO, dan deployment untuk project portfolio static.

Project ini dibuat menggunakan:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Bits
- Magic UI

Project ini tidak menggunakan backend, database, API route, auth, atau dashboard.
docs/workflow.md

Isi:

# Workflow Project

## Tujuan

Membangun website portfolio static modern tanpa backend.

## Urutan Pengerjaan

1. Setup Next.js
2. Setup static export
3. Setup Tailwind CSS
4. Setup Framer Motion
5. Setup Magic UI
6. Setup React Bits component
7. Buat struktur folder
8. Buat data static
9. Buat layout utama
10. Buat homepage section
11. Buat halaman projects
12. Buat halaman project detail
13. Buat halaman contact
14. Tambahkan animasi
15. Optimasi responsive
16. Optimasi SEO
17. Build static
18. Deploy

## Batasan Project

Project ini tidak memakai:

- Backend
- Database
- API route
- Auth
- Middleware
- Server Action untuk mutation
- Prisma
- NestJS
docs/folder-structure.md

Isi:

# Folder Structure

## `src/app`

Berisi routing utama Next.js App Router.

## `src/components`

Berisi semua reusable component.

## `src/components/sections`

Berisi section utama homepage.

## `src/components/cards`

Berisi card component seperti project card, skill card, dan service card.

## `src/components/motion`

Berisi reusable animation wrapper menggunakan Framer Motion.

## `src/components/effects`

Berisi visual effect seperti gradient background, spotlight, dan floating orb.

## `src/data`

Berisi data static portfolio.

## `src/lib`

Berisi helper, config, constants, dan SEO utility.

## `src/types`

Berisi TypeScript type.
docs/tech-stack.md

Isi:

# Tech Stack

## Core

- Next.js App Router
- TypeScript
- Tailwind CSS

## UI

- shadcn/ui
- Magic UI
- React Bits

## Animation

- Framer Motion

## Icon

- Lucide React

## Deployment

- Vercel
- Static hosting
docs/design-system.md

Isi:

# Design System

## Theme

Modern dark futuristic dengan gaya clean, premium, dan Gen Z friendly.

## Color

- Background: `#030712`
- Surface: `rgba(255,255,255,0.06)`
- Border: `rgba(255,255,255,0.12)`
- Primary: `#8b5cf6`
- Secondary: `#06b6d4`
- Accent: `#f97316`
- Text: `#f8fafc`
- Muted Text: `#94a3b8`

## UI Style

- Glassmorphism
- Gradient mesh
- Bento grid
- Soft shadow
- Rounded large card
- Animated border
- Smooth hover interaction

## Layout Style

- Mobile first
- Max width container
- Large whitespace
- Strong hero section
- Visual project showcase
docs/animation-guideline.md

Isi:

# Animation Guideline

## Prinsip

Animasi harus memperkuat pengalaman pengguna, bukan mengganggu.

## Gunakan Animasi Untuk

- Hero text reveal
- Section fade in
- Project card hover
- Skill marquee
- CTA button hover
- Background effect

## Jangan Berlebihan

Hindari terlalu banyak animasi berat dalam satu halaman.

## Komponen Animasi

Reusable animation component disimpan di:

```txt
src/components/motion/

Contoh:

fade-in.tsx
slide-up.tsx
text-reveal.tsx
stagger-container.tsx

---

## `docs/seo-guideline.md`

Isi:

```md
# SEO Guideline

## Metadata

Setiap halaman utama harus memiliki metadata.

Halaman yang perlu metadata:

- Homepage
- Projects page
- Project detail page
- Contact page

## Open Graph

Gunakan image khusus:

```txt
public/images/og-image.png
Struktur Heading

Gunakan heading secara rapi:

H1: Judul utama halaman
H2: Section utama
H3: Sub section
Image

Semua gambar project harus memiliki alt text yang jelas.


---

## `docs/deployment.md`

Isi:

```md
# Deployment

## Build Static

Jalankan:

```bash
npm run build

Jika konfigurasi static export sudah benar, Next.js akan menghasilkan folder:

out/
Deployment Target

Project bisa dideploy ke:

Vercel
Netlify
Cloudflare Pages
GitHub Pages
Static hosting biasa
Catatan

Karena project ini static, jangan gunakan fitur yang membutuhkan server runtime.


---

# 6. Konfigurasi Static Export

File:

```txt
next.config.ts

Isi:

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
7. Urutan Implementasi Detail
Step 1 — Setup Project
npx create-next-app@latest portfolio-modern \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

Masuk ke project:

cd portfolio-modern

Install dependency:

npm install framer-motion lucide-react clsx tailwind-merge
Step 2 — Setup shadcn/ui
npx shadcn@latest init

Install komponen dasar:

npx shadcn@latest add button card badge separator tabs tooltip
Step 3 — Setup Magic UI

Contoh install komponen Magic UI:

npx shadcn@latest add @magicui/globe

Komponen Magic UI yang cocok untuk portfolio:

- Globe
- Marquee
- Border Beam
- Animated Beam
- Word Rotate
- Number Ticker
- Shimmer Button
- Bento Grid
Step 4 — Setup Folder docs/

Buat folder:

mkdir docs

Buat file dokumentasi:

touch docs/README.md
touch docs/workflow.md
touch docs/folder-structure.md
touch docs/tech-stack.md
touch docs/design-system.md
touch docs/animation-guideline.md
touch docs/seo-guideline.md
touch docs/deployment.md
Step 5 — Setup Folder Source Code

Buat struktur utama:

mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/cards
mkdir -p src/components/effects
mkdir -p src/components/motion
mkdir -p src/data
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/styles

Buat file data:

touch src/data/profile.ts
touch src/data/projects.ts
touch src/data/skills.ts
touch src/data/services.ts
touch src/data/experience.ts
touch src/data/social-links.ts

Buat file config:

touch src/lib/site-config.ts
touch src/lib/seo.ts
touch src/lib/constants.ts

Buat file type:

touch src/types/project.type.ts
touch src/types/skill.type.ts
touch src/types/service.type.ts
touch src/types/site.type.ts
8. Workflow Halaman
Homepage

File:

src/app/page.tsx

Isi section:

1. Hero Section
2. About Section
3. Skills Section
4. Featured Projects Section
5. Services Section
6. Experience Section
7. Contact Section
Projects Page

File:

src/app/projects/page.tsx

Fungsi:

- Menampilkan semua project
- Filter sederhana jika diperlukan
- Link ke detail project
Project Detail Page

File:

src/app/projects/[slug]/page.tsx

Fungsi:

- Menampilkan detail project
- Tech stack project
- Screenshot project
- Link demo
- Link GitHub

Karena static, wajib pakai:

generateStaticParams()
Contact Page

File:

src/app/contact/page.tsx

Fungsi:

- Menampilkan email
- Link WhatsApp
- Link Instagram
- Link LinkedIn
- Link GitHub

Tidak perlu form submit ke backend.

Kalau ingin tombol contact, cukup arahkan ke:

mailto:
wa.me
LinkedIn
Instagram
9. Workflow Data

Semua data disimpan lokal.

Contoh:

src/data/profile.ts
src/data/projects.ts
src/data/skills.ts
src/data/services.ts
src/data/experience.ts

Contoh profile.ts:

export const profile = {
  name: "Bigboss",
  role: "Fullstack Developer",
  headline: "I build modern web experiences with clean code.",
  description:
    "Saya membangun website modern, cepat, responsif, dan punya tampilan profesional menggunakan Next.js.",
  location: "Indonesia",
  email: "your-email@example.com",
  resumeUrl: "/resume.pdf",
};

Contoh projects.ts:

import type { Project } from "@/types/project.type";

export const projects: Project[] = [
  {
    slug: "game-account-store",
    title: "Game Account Store",
    description:
      "Platform jual beli akun game dengan tampilan modern dan sistem seller dashboard.",
    image: "/images/projects/project-1.png",
    techStack: ["Next.js", "NestJS", "Prisma", "MariaDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  },
  {
    slug: "ai-ebook-generator",
    title: "AI Ebook Generator",
    description:
      "Aplikasi AI untuk membuat ebook otomatis dengan cover, chapter, dan export.",
    image: "/images/projects/project-2.png",
    techStack: ["Next.js", "Python", "Gemini", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  },
];
10. Workflow Component

Gunakan pola ini:

components/
├── layout/
│   └── untuk navbar, footer, wrapper
│
├── sections/
│   └── untuk section utama halaman
│
├── cards/
│   └── untuk card reusable
│
├── motion/
│   └── untuk wrapper animasi
│
├── effects/
│   └── untuk background/effect visual
│
└── ui/
    └── untuk komponen shadcn/ui

Aturan:

- Satu file satu tanggung jawab
- Section tidak terlalu panjang
- Card dipisah dari section
- Animasi reusable dipisah ke folder motion
- Background effect dipisah ke folder effects
11. Workflow Animasi

Gunakan Framer Motion hanya di komponen yang butuh animasi.

Karena animasi berjalan di browser, file animasi harus pakai:

"use client";

Contoh:

"use client";

import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
12. Workflow SEO

Gunakan metadata di:

src/app/layout.tsx
src/app/projects/page.tsx
src/app/projects/[slug]/page.tsx
src/app/contact/page.tsx

Contoh:

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bigboss — Fullstack Developer",
  description:
    "Portfolio modern untuk showcase project, skill, experience, dan service.",
};

Untuk detail project, gunakan dynamic metadata berdasarkan data lokal.

13. Workflow Build

Jalankan:

npm run build

Jika berhasil, hasil static akan ada di:

out/

Project siap di-host sebagai static website.

14. Workflow Deployment

Target deployment:

1. Vercel
2. Netlify
3. Cloudflare Pages
4. GitHub Pages
5. Static hosting biasa

Untuk Vercel:

1. Import project
2. Framework: Next.js
3. Build command: npm run build
4. Output folder: out
5. Deploy
15. Checklist Final Project
[ ] Project menggunakan Next.js App Router
[ ] Project menggunakan TypeScript
[ ] Project menggunakan Tailwind CSS
[ ] Static export aktif
[ ] Folder docs sudah dibuat
[ ] Dokumentasi workflow sudah dibuat
[ ] Struktur folder rapi
[ ] Data portfolio disimpan di src/data
[ ] Tidak ada backend
[ ] Tidak ada database
[ ] Tidak ada API route
[ ] Tidak ada auth
[ ] Tidak ada middleware
[ ] Tidak ada server action mutation
[ ] Homepage selesai
[ ] Projects page selesai
[ ] Project detail page selesai
[ ] Contact page selesai
[ ] Animasi Framer Motion berjalan
[ ] Magic UI digunakan seperlunya
[ ] React Bits digunakan seperlunya
[ ] Responsive mobile aman
[ ] SEO metadata tersedia
[ ] Open Graph image tersedia
[ ] Build static berhasil
[ ] Deploy berhasil
16. Kesimpulan Workflow

Workflow final yang paling cocok:

Setup Project
→ Setup Static Export
→ Setup UI Library
→ Buat Folder Docs
→ Buat Struktur Folder Source Code
→ Buat Data Static
→ Buat Layout
→ Buat Homepage
→ Buat Projects Page
→ Buat Detail Project Page
→ Buat Contact Page
→ Tambahkan Animasi
→ Optimasi SEO
→ Optimasi Responsive
→ Build Static
→ Deploy

Prinsip project:

UI harus terlihat mahal.
Kode harus rapi.
Data harus sederhana.
Animasi harus halus.
Website harus cepat.
Struktur harus profesional.
Tidak perlu backend.