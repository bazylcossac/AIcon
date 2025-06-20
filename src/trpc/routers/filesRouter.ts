import { protectedProcedure, router } from "./../init";
import * as schema from "../../db/schema";
import { drizzle } from "drizzle-orm/neon-http";

import { ImageUploadDBSchema } from "@/lib/zodSchemas";

const db = drizzle(process.env.DATABASE_URL!, { schema });

export const filesRouter = router({
  uploadFile: protectedProcedure
    .input(ImageUploadDBSchema)
    .mutation(async (opts) => {
      const { authorId, url, type, prompt, quality, size } = opts.input;
      if (!url) {
        throw new Error("No url provided");
      }
      try {
        await db.insert(schema.files).values({
          authorId,
          url,
          type,
          prompt,
          quality,
          size,
          projectId: "1",
        });
      } catch (err) {
        const error = err as Error;
        throw new Error(error.message);
      }
    }),
});

export type AppRouterType = typeof filesRouter;
