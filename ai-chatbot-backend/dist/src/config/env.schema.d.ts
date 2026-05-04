import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        test: "test";
        production: "production";
    }>>;
    PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    DATABASE_HOST: z.ZodDefault<z.ZodString>;
    DATABASE_PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    DATABASE_USER: z.ZodDefault<z.ZodString>;
    DATABASE_PASSWORD: z.ZodDefault<z.ZodString>;
    DATABASE_NAME: z.ZodDefault<z.ZodString>;
    DATABASE_URL: z.ZodString;
    OLLAMA_BASE_URL: z.ZodDefault<z.ZodString>;
    OLLAMA_MODEL: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type EnvConfig = z.infer<typeof envSchema>;
