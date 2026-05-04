# Architecture

## Layer

1. Controller menerima request.
2. Service menjalankan business logic.
3. Prisma menyimpan data ke database.
4. OllamaService menghubungi Ollama.
5. Response dikembalikan ke client.

## Modul

- ChatModule
- OllamaModule
- PrismaModule
