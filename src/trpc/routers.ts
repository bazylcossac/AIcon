import { protectedProcedure, router } from "./init";
import * as schema from "../db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";
import { desc, eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

import {
  GenerateImageSchema,
  ImageUploadDBSchema,
  InitialTypeSchema,
} from "@/lib/zodSchemas";
import { ImageGenOpenAIRequest } from "@/actions/actions";
const db = drizzle(process.env.DATABASE_URL!, { schema });

export const appRouter = router({
  getusers: protectedProcedure.query(async () => {
    return await db.query.users.findMany();
  }),
  uploadFile: protectedProcedure
    .input(ImageUploadDBSchema)
    .mutation(async (opts) => {
      const { authorId, url, type, prompt, quality, size } = opts.input;
      if (!url) {
        throw new Error("No url provided");
      }
      try {
        await db
          .insert(schema.files)
          .values({ authorId, url, type, prompt, quality, size });
      } catch (err) {
        const error = err as Error;
        throw new Error(error.message);
      }
    }),

  getAllUserFiles: protectedProcedure
    .input(z.string().uuid())
    .query(async (otps) => {
      try {
        return await db
          .select()
          .from(schema.files)
          .where(eq(schema.files.authorId, otps.input));
      } catch {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
    }),
  getUserImages: protectedProcedure
    .input(z.string().uuid())
    .query(async (opts) => {
      try {
        return await db
          .select()
          .from(schema.files)
          .where(eq(schema.files.authorId, opts.input))
          .orderBy(desc(schema.files.createdAt));
      } catch {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
    }),
  getUserTokens: protectedProcedure.query(async (opts) => {
    const userId = opts.ctx.session.user?.id;
    if (!userId) return;
    try {
      const { tokens } = await db
        .select({ tokens: schema.users.tokens })
        .from(schema.users)
        .where(eq(schema.users.id, userId))
        .limit(1)
        .then((rows) => rows[0]);
      if (!tokens) {
        return 0;
      }
      return tokens;
    } catch {
      throw new TRPCError({ code: "NOT_FOUND" });
    }
  }),
  generateOpenAiImage: protectedProcedure
    .input(GenerateImageSchema)
    .mutation(async (opts) => {
      const { prompt, userId } = opts.input;
      try {
        const imageData = await ImageGenOpenAIRequest(prompt, userId, 1);
        return imageData;
      } catch {
        throw new TRPCError({ code: "SERVICE_UNAVAILABLE" });
      }
    }),
  cleanupUserSession: protectedProcedure
    .input(z.string().uuid())
    .mutation(async (opts) => {
      const sessionToken = opts.input;
      try {
        await db
          .delete(schema.sessions)
          .where(eq(schema.sessions.sessionToken, sessionToken));
      } catch {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
    }),

  TTSOpenAIRequestTRPC: protectedProcedure
    .input(
      z.object({
        state: InitialTypeSchema,
        userId: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { state, userId } = opts.input;
      console.log(state);
    }),
});

export type AppRouterType = typeof appRouter;
