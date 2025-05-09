import { protectedProcedure, publicProcedure, router } from "./init";
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

  cleanupUserSession: protectedProcedure
    .input(z.string().uuid())
    .mutation(async (opts) => {
      const sessionToken = opts.input;
      try {
        await db
          .delete(schema.sessions)
          .where(eq(schema.sessions.sessionToken, sessionToken));
        console.log("deleted session");
      } catch {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
    }),
});

export type AppRouterType = typeof appRouter;
