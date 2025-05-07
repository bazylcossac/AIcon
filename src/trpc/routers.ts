import { protectedProcedure, publicProcedure, router } from "./init";
import * as schema from "../db/schema";
import { drizzle } from "drizzle-orm/neon-http";
const db = drizzle(process.env.DATABASE_URL!, { schema });

export const appRouter = router({
  getusers: protectedProcedure.query(async () => {
    return await db.query.users.findMany();
  }),
});

export type AppRouterType = typeof appRouter;
