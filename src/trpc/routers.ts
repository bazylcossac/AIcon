import { router } from "./init";

import { userRouter } from "./routers/userRouter";
import { filesRouter } from "./routers/filesRouter";
import { authRouter } from "./routers/authRouter";
import { openAIRouter } from "./routers/openAIRouter";

export const appRouter = router({
  user: userRouter,
  files: filesRouter,
  auth: authRouter,
  openAI: openAIRouter,
});

export type AppRouterType = typeof appRouter;
