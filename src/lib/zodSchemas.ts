import { z } from "zod";

export const InitialTypeSchema = z.object({
  model: z.string(),
  instructions: z.string(),
  voice: z.string(),
  responseFormat: z.union([z.literal("mp3"), z.literal("wav")]),
  message: z.string(),
});

export const UUIDSchema = z.string().uuid();

export const GenerateImageSchema = z.object({
  prompt: z.string().max(50),
  userId: z.string(),
});
