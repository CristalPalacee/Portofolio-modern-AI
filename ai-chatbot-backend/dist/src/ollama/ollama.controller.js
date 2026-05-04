var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Res } from '@nestjs/common';
import { OllamaService } from './ollama.service.js';
let OllamaController = class OllamaController {
    ollamaService;
    constructor(ollamaService) {
        this.ollamaService = ollamaService;
    }
    async chat(body) {
        if (body.messages.length === 0) {
            throw new Error('No messages provided');
        }
        if (body.messages.some((message) => message.role !== 'user')) {
            throw new Error('Only user messages are allowed');
        }
        return this.ollamaService.chat(body.messages);
    }
    async chatStream(body, res) {
        res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
        res.setHeader('Cache-Control', 'no-cache, no-transform');
        res.setHeader('Connection', 'keep-alive');
        const stream = await this.ollamaService.chatStream(body.messages);
        let buffer = '';
        stream.on('data', (chunk) => {
            buffer += chunk.toString('utf8');
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? '';
            for (const line of lines) {
                if (!line.trim())
                    continue;
                try {
                    const data = JSON.parse(line);
                    const token = data.message?.content ?? '';
                    if (token) {
                        res.write(`data: ${JSON.stringify({ token })}\n\n`);
                    }
                    if (data.done) {
                        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
                    }
                }
                catch {
                }
            }
        });
        stream.on('end', () => {
            res.end();
        });
        stream.on('error', () => {
            res.write(`data: ${JSON.stringify({
                error: 'Stream Ollama terputus.',
            })}\n\n`);
            res.end();
        });
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OllamaController.prototype, "chat", null);
__decorate([
    Post('stream'),
    __param(0, Body()),
    __param(1, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OllamaController.prototype, "chatStream", null);
OllamaController = __decorate([
    Controller('chat'),
    __metadata("design:paramtypes", [OllamaService])
], OllamaController);
export { OllamaController };
//# sourceMappingURL=ollama.controller.js.map