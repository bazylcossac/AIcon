import { protectedProcedure, router } from "./../init";
import { z } from "zod";

import { TRPCError } from "@trpc/server";

import { GenerateImageSchema, InitialTypeSchema } from "@/lib/zodSchemas";
import { ImageGenOpenAIRequest } from "@/actions/actions";

export const openAIRouter = router({
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

export type AppRouterType = typeof openAIRouter;
