import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiPropertyOptional({
    description:
      'ID session yang sudah ada. Kosongkan untuk membuat session baru.',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  sessionId?: string;

  @ApiProperty({
    description: 'Pesan dari user yang akan dikirim ke Ollama.',
    example: 'Halo, jelaskan apa itu NestJS secara singkat.',
  })
  message!: string;
}
