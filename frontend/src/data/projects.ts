import type { Project } from "@/types/project.type";

export const projects: Project[] = [
  {
    slug: "game-account-store",
    title: "Game Account Store",
    description:
      "Platform jual beli akun game dengan tampilan premium dan flow katalog yang cepat.",
    longDescription:
      "Project ini menonjolkan katalog produk, detail akun, CTA pembelian, dan pengalaman mobile-first untuk user yang ingin mencari akun game dengan cepat.",
    image: "/images/projects/project-1.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Nest JS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/game-account-store",
    featured: true,
    year: "2026",
    category: "E-commerce",
    impact: "Fast catalog UX with clean static pages.",
  },
  {
    slug: "portfolio-modern",
    title: "Portfolio Modern",
    description:
      "Website portfolio dark futuristic dengan project showcase dan detail page.",
    longDescription:
      "Portfolio static yang fokus pada performa, SEO, animasi halus, dan data lokal agar mudah di-deploy ke static hosting.",
    image: "/images/projects/project-3.svg",
    techStack: ["Next.js App Router", "Framer Motion", "Lucide React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio-modern",
    featured: true,
    year: "2026",
    category: "Portfolio",
    impact: "A clean personal brand surface with strong visual identity.",
  },
];
