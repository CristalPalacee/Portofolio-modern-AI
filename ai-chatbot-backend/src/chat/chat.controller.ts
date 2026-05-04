import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { ChatService } from './chat.service.js';
import { CreateChatSessionDto } from './dto/create-chat-session.dto.js';
import { SendMessageDto } from './dto/send-message.dto.js';
import {
  createChatSessionSchema,
  sendMessageSchema,
} from './schemas/chat.schema.js';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiOperation({ summary: 'Membuat session chat baru' })
  @ApiBody({ type: CreateChatSessionDto, required: false })
  @ApiOkResponse({ description: 'Session chat baru berhasil dibuat.' })
  @Post('sessions')
  createSession(
    @Body(new ZodValidationPipe(createChatSessionSchema))
    dto: CreateChatSessionDto,
  ) {
    return this.chatService.createSession(dto);
  }

  @ApiOperation({ summary: 'Mengambil semua session chat' })
  @ApiOkResponse({ description: 'Daftar session chat berhasil diambil.' })
  @Get('sessions')
  getSessions() {
    return this.chatService.getSessions();
  }

  @ApiOperation({ summary: 'Mengambil detail session chat berdasarkan ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID session chat',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiOkResponse({ description: 'Detail session chat berhasil diambil.' })
  @Get('sessions/:id')
  getSessionById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.chatService.getSessionById(id);
  }

  @ApiOperation({ summary: 'Mengirim pesan ke chatbot AI' })
  @ApiBody({ type: SendMessageDto })
  @ApiOkResponse({
    description: 'Pesan user dan balasan AI berhasil diproses.',
  })
  @Post('message')
  sendMessage(
    @Body(new ZodValidationPipe(sendMessageSchema)) dto: SendMessageDto,
  ) {
    return this.chatService.sendMessage(dto);
  }
}
