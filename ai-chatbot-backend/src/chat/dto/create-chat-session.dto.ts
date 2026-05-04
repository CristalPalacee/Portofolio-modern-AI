import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateChatSessionDto {
  @ApiPropertyOptional({
    description: 'Judul sesi chat. Jika kosong, sistem memakai judul default.',
    example: 'Belajar NestJS',
  })
  title?: string;
}
