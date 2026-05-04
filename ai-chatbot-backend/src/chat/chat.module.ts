import { Module } from '@nestjs/common';
import { OllamaModule } from '../ollama/ollama.module.js';
import { ChatController } from './chat.controller.js';
import { ChatService } from './chat.service.js';

@Module({
  imports: [OllamaModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
