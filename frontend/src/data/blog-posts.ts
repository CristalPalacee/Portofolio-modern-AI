import type { BlogPost } from "@/types/blog.type";

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-static-portfolio",
    title: "Kenapa Portfolio Static Next.js Masih Paling Sat Set",
    excerpt:
      "Static export bikin portfolio cepat, gampang deploy, dan tidak perlu pusing server untuk showcase personal brand.",
    content: [
      "Portfolio tidak selalu butuh backend. Untuk personal branding, project showcase, dan halaman kontak sederhana, static website sering jadi pilihan paling ringan dan tahan banting.",
      "Dengan Next.js App Router, kita tetap bisa punya struktur halaman profesional, SEO metadata, dynamic route berbasis data lokal, dan build output yang siap di-host di banyak platform.",
      "Kuncinya adalah memisahkan konten ke folder data lokal agar update project, skill, blog, dan harga bisa dilakukan tanpa mengubah banyak komponen UI.",
    ],
    date: "02 Mei 2026",
    readTime: "4 min read",
    tags: ["Next.js", "Static Export", "Portfolio"],
    featuredImage: "/images/projects/project-3.svg",
  },
  {
    slug: "ui-futuristic-yang-tetap-rapi",
    title: "UI Futuristic yang Tetap Rapi dan Tidak Berlebihan",
    excerpt:
      "Dark futuristic bisa terlihat mahal kalau gradient, glass, spacing, dan animasi dipakai dengan niat.",
    content: [
      "Desain futuristic bukan berarti semua elemen harus menyala. Justru ruang kosong, kontras yang tepat, dan hierarchy teks yang kuat membuat visual terasa premium.",
      "Gunakan glass card untuk konten penting, gradient mesh sebagai atmosfer, dan micro animation hanya saat ia membantu user memahami arah interaksi.",
      "Portfolio ini memakai warna violet, cyan, dan orange sebagai aksen agar tidak jatuh ke tampilan generik yang terlalu aman.",
    ],
    date: "02 Mei 2026",
    readTime: "3 min read",
    tags: ["UI Design", "Futuristic", "Tailwind CSS"],
    featuredImage: "/images/og-image.svg",
  },
  {
    slug: "workflow-web-cepat-tanpa-backend",
    title: "Workflow Web Cepat Tanpa Backend",
    excerpt:
      "Cara menjaga project tetap sederhana: data lokal, komponen reusable, dan build static yang mudah diverifikasi.",
    content: [
      "Saat scope hanya portfolio, landing page, atau company profile sederhana, backend bisa menjadi beban tambahan yang tidak perlu.",
      "Workflow yang sehat dimulai dari data lokal, lalu komponen section, card, motion wrapper, dan route static. Setiap bagian punya tanggung jawab kecil sehingga mudah dirawat.",
      "Setelah fitur selesai, validasi dengan lint dan build. Jika build static berhasil, project sudah siap untuk diupload ke static hosting.",
    ],
    date: "02 Mei 2026",
    readTime: "5 min read",
    tags: ["Workflow", "Frontend", "No Backend"],
    featuredImage: "/images/projects/project-1.svg",
  },
];
