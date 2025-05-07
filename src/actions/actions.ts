"use server";

import { createTrpcServer } from "@/trpc/trpcServer";

export async function cleanupSession(sessionToken: string) {
  const trpcServer = await createTrpcServer();
  console.log(sessionToken);
  await trpcServer.cleanupUserSession(sessionToken);
}
