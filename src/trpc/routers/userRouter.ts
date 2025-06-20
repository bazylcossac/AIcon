import { protectedProcedure, router } from ".././init";
import * as schema from "../../db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";
import { and, desc, eq, sql } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { appRouter } from "../routers";

const db = drizzle(process.env.DATABASE_URL!, { schema });

export const userRouter = router({
  getusers: protectedProcedure.query(async () => {
    return await db.query.users.findMany();
  }),
  getUserImages: protectedProcedure
    .input(z.string().uuid())
    .query(async (opts) => {
      try {
        return await db
          .select()
          .from(schema.files)
          .where(
            and(
              eq(schema.files.authorId, opts.input),
              eq(schema.files.type, "image/png")
            )
          )
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
  removeUserTokenAmount: protectedProcedure
    .input(z.number())
    .mutation(async (opts) => {
      try {
        const userId = opts.ctx.session.user?.id;
        if (!userId) return;

        await db
          .update(schema.users)
          .set({ tokens: sql`${schema.users.tokens} - 1` })
          .where(eq(schema.users.id, userId));
      } catch {
        throw new TRPCError({ code: "NOT_FOUND" });
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
});

export type AppRouterType = typeof appRouter;
