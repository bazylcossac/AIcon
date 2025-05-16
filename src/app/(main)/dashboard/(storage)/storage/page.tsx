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

  const files = await trpcServer.getAllUserFiles(session.user.id);
  console.log(files);
  return <div>storage page</div>;
}

export default page;
