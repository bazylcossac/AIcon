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

export const ImageUploadDBSchema = z.object({
  authorId: z.string().uuid(),
  url: z.string().url(),
  type: z.string(),
  prompt: z.string(),
  quality: z.union([z.literal("low"), z.literal("medium"), z.literal("high")]),
  size: z.string(),
});
