var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class SendMessageDto {
    sessionId;
    message;
}
__decorate([
    ApiPropertyOptional({
        description: 'ID session yang sudah ada. Kosongkan untuk membuat session baru.',
        example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    __metadata("design:type", String)
], SendMessageDto.prototype, "sessionId", void 0);
__decorate([
    ApiProperty({
        description: 'Pesan dari user yang akan dikirim ke Ollama.',
        example: 'Halo, jelaskan apa itu NestJS secara singkat.',
    }),
    __metadata("design:type", String)
], SendMessageDto.prototype, "message", void 0);
//# sourceMappingURL=send-message.dto.js.map