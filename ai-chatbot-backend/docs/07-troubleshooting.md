# Troubleshooting

## Ollama tidak merespons

Pastikan Ollama berjalan:

```bash
ollama serve
```

## Model tidak ditemukan

Pull model:

```bash
ollama pull qwen2.5:3b
```

## Prisma gagal connect

Cek file `.env` dan pastikan database `ai_chatbot_db` sudah dibuat.
