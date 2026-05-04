import { Injectable, NotFoundException } from '@nestjs/common';
import { APP_CONSTANTS } from '../common/constants/app.constant.js';
import { MessageRole } from '../generated/prisma/enums.js';
import type { CreateChatSessionDto } from './dto/create-chat-session.dto.js';
import type { SendMessageDto } from './dto/send-message.dto.js';
import type { OllamaMessage } from '../ollama/dto/ollama-chat.dto.js';
import { OllamaService } from '../ollama/ollama.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ChatService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ollamaService: OllamaService,
  ) {}

  async createSession(dto?: CreateChatSessionDto) {
    return this.prisma.chatSession.create({
      data: {
        title: dto?.title?.trim() || APP_CONSTANTS.defaultSessionTitle,
      },
    });
  }

  async getSessions() {
    return this.prisma.chatSession.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });
  }

  async getSessionById(sessionId: string) {
    const session = await this.prisma.chatSession.findUnique({
      where: {
        id: sessionId,
      },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    if (!session) {
      throw new NotFoundException('Session chat tidak ditemukan');
    }

    return session;
  }

  async sendMessage(dto: SendMessageDto) {
    const session = dto.sessionId
      ? await this.getSessionById(dto.sessionId)
      : await this.createSession();

    const userMessage = await this.prisma.chatMessage.create({
      data: {
        sessionId: session.id,
        role: MessageRole.USER,
        content: dto.message,
      },
    });

    const history = await this.prisma.chatMessage.findMany({
      where: {
        sessionId: session.id,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    const ollamaMessages: OllamaMessage[] = [
      {
        role: 'system',
        content: APP_CONSTANTS.assistantSystemPrompt,
      },
      ...history.map((message) => ({
        role: this.mapRole(message.role),
        content: message.content,
      })),
    ];

    const aiResponse = await this.ollamaService.chat(ollamaMessages);

    const assistantMessage = await this.prisma.chatMessage.create({
      data: {
        sessionId: session.id,
        role: MessageRole.ASSISTANT,
        content: aiResponse.message,
        model: aiResponse.model,
        tokens: aiResponse.evalCount,
      },
    });

    return {
      sessionId: session.id,
      userMessage,
      assistantMessage,
    };
  }

  private mapRole(role: MessageRole): OllamaMessage['role'] {
    switch (role) {
      case MessageRole.USER:
        return 'user';
      case MessageRole.ASSISTANT:
        return 'assistant';
      case MessageRole.SYSTEM:
      default:
        return 'system';
    }
  }
}
