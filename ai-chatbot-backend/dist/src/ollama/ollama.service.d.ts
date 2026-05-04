import { ConfigService } from '@nestjs/config';
import type { OllamaMessage } from './dto/ollama-chat.dto.js';
import { Readable } from 'node:stream';
export declare class OllamaService {
    private readonly configService;
    private readonly baseUrl;
    private readonly model;
    private readonly systemPrompt;
    constructor(configService: ConfigService);
    private build;
    chat(messages: OllamaMessage[]): Promise<{
        model: string;
        message: string;
        totalDuration: number | undefined;
        evalCount: number | undefined;
    }>;
    chatStream(messages: OllamaMessage[]): Promise<Readable>;
}
