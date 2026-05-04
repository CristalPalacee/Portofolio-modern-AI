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
import { Body, Controller, Get, Param, ParseUUIDPipe, Post, } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags, } from '@nestjs/swagger';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { ChatService } from './chat.service.js';
import { CreateChatSessionDto } from './dto/create-chat-session.dto.js';
import { SendMessageDto } from './dto/send-message.dto.js';
import { createChatSessionSchema, sendMessageSchema, } from './schemas/chat.schema.js';
let ChatController = class ChatController {
    chatService;
    constructor(chatService) {
        this.chatService = chatService;
    }
    createSession(dto) {
        return this.chatService.createSession(dto);
    }
    getSessions() {
        return this.chatService.getSessions();
    }
    getSessionById(id) {
        return this.chatService.getSessionById(id);
    }
    sendMessage(dto) {
        return this.chatService.sendMessage(dto);
    }
};
__decorate([
    ApiOperation({ summary: 'Membuat session chat baru' }),
    ApiBody({ type: CreateChatSessionDto, required: false }),
    ApiOkResponse({ description: 'Session chat baru berhasil dibuat.' }),
    Post('sessions'),
    __param(0, Body(new ZodValidationPipe(createChatSessionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateChatSessionDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createSession", null);
__decorate([
    ApiOperation({ summary: 'Mengambil semua session chat' }),
    ApiOkResponse({ description: 'Daftar session chat berhasil diambil.' }),
    Get('sessions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getSessions", null);
__decorate([
    ApiOperation({ summary: 'Mengambil detail session chat berdasarkan ID' }),
    ApiParam({
        name: 'id',
        description: 'UUID session chat',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    ApiOkResponse({ description: 'Detail session chat berhasil diambil.' }),
    Get('sessions/:id'),
    __param(0, Param('id', new ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getSessionById", null);
__decorate([
    ApiOperation({ summary: 'Mengirim pesan ke chatbot AI' }),
    ApiBody({ type: SendMessageDto }),
    ApiOkResponse({
        description: 'Pesan user dan balasan AI berhasil diproses.',
    }),
    Post('message'),
    __param(0, Body(new ZodValidationPipe(sendMessageSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SendMessageDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "sendMessage", null);
ChatController = __decorate([
    ApiTags('Chat'),
    Controller('chat'),
    __metadata("design:paramtypes", [ChatService])
], ChatController);
export { ChatController };
//# sourceMappingURL=chat.controller.js.map