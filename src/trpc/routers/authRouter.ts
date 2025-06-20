import { protectedProcedure, router } from "./../init";
import * as schema from "../../db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

const db = drizzle(process.env.DATABASE_URL!, { schema });

export const authRouter = router({
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

export type AppRouterType = typeof authRouter;
