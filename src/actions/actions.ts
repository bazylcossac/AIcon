"use server";

import { createTrpcServer } from "@/trpc/trpcServer";

export async function cleanupSession(sessionToken: string) {
  const trpcServer = await createTrpcServer();
  await trpcServer.cleanupUserSession(sessionToken);
}
