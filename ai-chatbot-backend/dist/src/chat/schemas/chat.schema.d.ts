import { z } from 'zod';
export declare const createChatSessionSchema: z.ZodDefault<z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export declare const sendMessageSchema: z.ZodObject<{
    sessionId: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, z.core.$strip>;
