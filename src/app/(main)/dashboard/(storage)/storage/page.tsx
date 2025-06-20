import React from "react";
import { createTrpcServer } from "@/trpc/trpcServer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/");
  }
  const trpcServer = await createTrpcServer({ session });
  const files = await trpcServer.user.getAllUserFiles();
  console.log(files);

  return <section className="h-full w-full flex"></section>;
}

export default page;
