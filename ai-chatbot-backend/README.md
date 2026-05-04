# AI Chatbot Backend

Backend API AI chatbot kecil menggunakan NestJS, Ollama, Prisma ORM v7, dan MariaDB/MySQL.

## Stack

- NestJS untuk REST API
- Ollama untuk model AI lokal
- Prisma ORM v7 dengan `@prisma/adapter-mariadb`
- MariaDB/MySQL untuk session dan riwayat chat

## Struktur

```text
ai-chatbot-backend/
├── docs/
├── prisma/
├── src/
├── .env
├── .env.example
├── prisma.config.ts
└── package.json
```

## Menjalankan Project

```bash
npm install
ollama pull qwen2.5:3b
npm run prisma:migrate -- --name init
npm run prisma:generate
npm run start:dev
```

Server akan aktif di `http://localhost:3001/api`.

## Endpoint

- `POST /api/chat/sessions`
- `GET /api/chat/sessions`
- `GET /api/chat/sessions/:id`
- `POST /api/chat/message`

## Swagger

Swagger UI tersedia di `http://localhost:3001/api/docs` setelah server dijalankan.

## Catatan Penting

- Prisma ORM v7 membaca `DATABASE_URL` dari `prisma.config.ts`.
- Prisma Client tetap membutuhkan adapter MariaDB di aplikasi NestJS.
- Ollama dipanggil ke `POST /api/chat` dengan `stream: false` agar respons mudah diproses dan disimpan.
