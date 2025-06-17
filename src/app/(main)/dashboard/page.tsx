"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { trpc } from "@/trpc/trpcClient";

function Page() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center w-44 h-44 bg-neutral-900 rounded-md m-2 hover:cursor-pointer hover:bg-neutral-950 transition">
        <FaPlus className="" />
      </div>
    </div>
  );
}

export default Page;
