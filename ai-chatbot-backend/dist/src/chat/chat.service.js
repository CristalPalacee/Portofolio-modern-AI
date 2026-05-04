var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { APP_CONSTANTS } from '../common/constants/app.constant.js';
import { MessageRole } from '../generated/prisma/enums.js';
import { OllamaService } from '../ollama/ollama.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
let ChatService = class ChatService {
    prisma;
    ollamaService;
    constructor(prisma, ollamaService) {
        this.prisma = prisma;
        this.ollamaService = ollamaService;
    }
    async createSession(dto) {
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
    async getSessionById(sessionId) {
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
    async sendMessage(dto) {
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
        const ollamaMessages = [
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
    mapRole(role) {
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
};
ChatService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        OllamaService])
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map