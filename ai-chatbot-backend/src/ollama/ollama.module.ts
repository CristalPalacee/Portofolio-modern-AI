import { Module } from '@nestjs/common';
import { OllamaService } from './ollama.service.js';
import { OllamaController } from './ollama.controller.js';

@Module({
  controllers: [OllamaController],
  providers: [OllamaService],
  exports: [OllamaService],
})
export class OllamaModule {}
