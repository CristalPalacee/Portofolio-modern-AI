import { MessageRole } from '../generated/prisma/enums.js';
import type { CreateChatSessionDto } from './dto/create-chat-session.dto.js';
import type { SendMessageDto } from './dto/send-message.dto.js';
import { OllamaService } from '../ollama/ollama.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class ChatService {
    private readonly prisma;
    private readonly ollamaService;
    constructor(prisma: PrismaService, ollamaService: OllamaService);
    createSession(dto?: CreateChatSessionDto): Promise<{
        id: string;
        title: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getSessions(): Promise<({
        messages: {
            id: string;
            createdAt: Date;
            role: MessageRole;
            content: string;
            model: string | null;
            tokens: number | null;
            sessionId: string;
        }[];
    } & {
        id: string;
        title: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getSessionById(sessionId: string): Promise<{
        messages: {
            id: string;
            createdAt: Date;
            role: MessageRole;
            content: string;
            model: string | null;
            tokens: number | null;
            sessionId: string;
        }[];
    } & {
        id: string;
        title: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    sendMessage(dto: SendMessageDto): Promise<{
        sessionId: string;
        userMessage: {
            id: string;
            createdAt: Date;
            role: MessageRole;
            content: string;
            model: string | null;
            tokens: number | null;
            sessionId: string;
        };
        assistantMessage: {
            id: string;
            createdAt: Date;
            role: MessageRole;
            content: string;
            model: string | null;
            tokens: number | null;
            sessionId: string;
        };
    }>;
    private mapRole;
}
