import { Body, Controller, Post, Res } from '@nestjs/common';
import { OllamaService } from './ollama.service.js';
import { OllamaMessage } from './dto/ollama-chat.dto.js';
import type { Response } from 'express';

type ChatRole = 'system' | 'user' | 'assistant';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages: ChatMessage[];
};

@Controller('chat')
export class OllamaController {
  constructor(private readonly ollamaService: OllamaService) {}

  @Post()
  async chat(@Body() body: ChatRequestBody) {
    if (body.messages.length === 0) {
      throw new Error('No messages provided');
    }

    if (body.messages.some((message) => message.role !== 'user')) {
      throw new Error('Only user messages are allowed');
    }

    return this.ollamaService.chat(body.messages);
  }

  @Post('stream')
  async chatStream(
    @Body() body: { messages: OllamaMessage[] },
    @Res() res: Response,
  ) {
    // Format SSE agar frontend bisa membaca token bertahap.
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');

    const stream = await this.ollamaService.chatStream(body.messages);

    let buffer = '';

    stream.on('data', (chunk: Buffer) => {
      buffer += chunk.toString('utf8');

      // Ollama mengirim JSON per baris.
      const lines = buffer.split('\n');

      // Simpan baris terakhir karena bisa saja JSON-nya belum lengkap.
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.trim()) continue;

        try {
          const data = JSON.parse(line) as {
            message?: {
              content?: string;
            };
            done?: boolean;
          };

          const token = data.message?.content ?? '';

          if (token) {
            res.write(`data: ${JSON.stringify({ token })}\n\n`);
          }

          if (data.done) {
            res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
          }
        } catch {
          // Abaikan chunk yang belum bisa diparse.
        }
      }
    });

    stream.on('end', () => {
      res.end();
    });

    stream.on('error', () => {
      res.write(
        `data: ${JSON.stringify({
          error: 'Stream Ollama terputus.',
        })}\n\n`,
      );

      res.end();
    });
  }
}
