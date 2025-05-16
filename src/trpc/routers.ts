import { protectedProcedure, router } from "./init";
import * as schema from "../db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
const db = drizzle(process.env.DATABASE_URL!, { schema });

export const appRouter = router({
  getusers: protectedProcedure.query(async () => {
    return await db.query.users.findMany();
  }),
  uploadFile: protectedProcedure
    .input(
      z.object({
        authorId: z.string().uuid(),
        url: z.string().url(),
        type: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { authorId, url, type } = opts.input;
      if (!url) {
        throw new Error("No url provided");
      }
      try {
        await db.insert(schema.files).values({ authorId, url, type });
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
        throw new TRPCError({ code: "SERVICE_UNAVAILABLE" });
      }
    }),
  cleanupUserSession: protectedProcedure
    .input(z.string().uuid())
    .mutation(async (opts) => {
      const sessionToken = opts.input;
      if (!sessionToken) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      try {
        await db
          .delete(schema.sessions)
          .where(eq(schema.sessions.sessionToken, sessionToken));
      } catch {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
    }),
});

export type AppRouterType = typeof appRouter;
