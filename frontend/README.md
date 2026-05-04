# Bigboss Portfolio

Static portfolio modern menggunakan Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, dan data lokal di `src/data`.

Project ini mengikuti `doc.md` di root workspace:

- Tidak ada backend
- Tidak ada database
- Tidak ada API route
- Tidak ada auth
- Static export aktif melalui `next.config.ts`

## Getting Started

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build static:

```bash
npm run build
```

Output static akan dibuat di folder `out/`.

## Struktur Penting

- `src/app`: routing App Router
- `src/components`: layout, section, card, motion, effect, dan UI reusable
- `src/data`: profile, projects, skills, services, experience, social links
- `docs`: dokumentasi internal project

Ganti `public/resume.pdf` dengan CV asli ketika sudah siap.
