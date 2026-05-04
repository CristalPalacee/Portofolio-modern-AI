import { z } from 'zod';

export const createChatSessionSchema = z
  .object({
    title: z.string().trim().min(1).max(120).optional(),
  })
  .default({});

export const sendMessageSchema = z.object({
  sessionId: z.string().uuid().optional(),
  message: z.string().trim().min(1).max(4000),
});
