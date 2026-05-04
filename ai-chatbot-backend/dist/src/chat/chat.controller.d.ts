import { ChatService } from './chat.service.js';
import { CreateChatSessionDto } from './dto/create-chat-session.dto.js';
import { SendMessageDto } from './dto/send-message.dto.js';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createSession(dto: CreateChatSessionDto): Promise<{
        id: string;
        title: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getSessions(): Promise<({
        messages: {
            id: string;
            createdAt: Date;
            role: import("../generated/prisma/enums.js").MessageRole;
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
    getSessionById(id: string): Promise<{
        messages: {
            id: string;
            createdAt: Date;
            role: import("../generated/prisma/enums.js").MessageRole;
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
            role: import("../generated/prisma/enums.js").MessageRole;
            content: string;
            model: string | null;
            tokens: number | null;
            sessionId: string;
        };
        assistantMessage: {
            id: string;
            createdAt: Date;
            role: import("../generated/prisma/enums.js").MessageRole;
            content: string;
            model: string | null;
            tokens: number | null;
            sessionId: string;
        };
    }>;
}
