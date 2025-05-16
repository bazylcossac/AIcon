import React from "react";
import { createTrpcServer } from "@/trpc/trpcServer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { GrStorage } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import Link from "next/link";

async function page() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/");
  }
  const trpcServer = await createTrpcServer({ session });
  const files = await trpcServer.getAllUserFiles(session.user.id);

  return <section className="h-full w-full flex"></section>;
}

export default page;
