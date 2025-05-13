"use server";

import { InitialType } from "@/lib/types";
import { createTrpcServer } from "@/trpc/trpcServer";

export async function cleanupSession(sessionToken: string) {
  const trpcServer = await createTrpcServer();
  await trpcServer.cleanupUserSession(sessionToken);
}

// export async function TSSOpenAIRequest(settings: InitialType) {}
