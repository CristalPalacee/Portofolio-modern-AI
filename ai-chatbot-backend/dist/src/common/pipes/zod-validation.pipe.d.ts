import { PipeTransform } from '@nestjs/common';
import type { ZodSchema } from 'zod';
export declare class ZodValidationPipe<TSchemaOutput> implements PipeTransform {
    private readonly schema;
    constructor(schema: ZodSchema<TSchemaOutput>);
    transform(value: unknown): TSchemaOutput;
}
