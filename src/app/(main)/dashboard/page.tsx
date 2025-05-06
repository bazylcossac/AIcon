"use client";
import { useSession } from "next-auth/react";
import React from "react";

function Page() {
  const user = useSession();

  return (
    <div>
      dashboard
      <p>{user.data?.user?.name}</p>
    </div>
  );
}

export default Page;
