"use client";

import React from "react";
import { trpc } from "@/trpc/trpcClient";

function Page() {
  const { data: users, isLoading } = trpc.getusers.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Users in db:</p>
      <ul>
        {users?.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default Page;
