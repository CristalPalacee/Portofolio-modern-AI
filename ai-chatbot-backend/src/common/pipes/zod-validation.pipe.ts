import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import type { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe<TSchemaOutput> implements PipeTransform {
  constructor(private readonly schema: ZodSchema<TSchemaOutput>) {}

  transform(value: unknown): TSchemaOutput {
    const parsed = this.schema.safeParse(value);

    if (!parsed.success) {
      throw new BadRequestException({
        message: 'Validation failed',
        issues: parsed.error.flatten(),
      });
    }

    return parsed.data;
  }
}
