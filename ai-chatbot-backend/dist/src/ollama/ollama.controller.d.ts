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
export declare class OllamaController {
    private readonly ollamaService;
    constructor(ollamaService: OllamaService);
    chat(body: ChatRequestBody): Promise<{
        model: string;
        message: string;
        totalDuration: number | undefined;
        evalCount: number | undefined;
    }>;
    chatStream(body: {
        messages: OllamaMessage[];
    }, res: Response): Promise<void>;
}
export {};
