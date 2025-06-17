"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";

function Page() {
  return (
    <div className="h-full w-full">
      <AddButton />
    </div>
  );
}

function AddButton() {
  return (
    <div className="flex items-center justify-center w-44 h-44 bg-neutral-900 rounded-md m-2 hover:cursor-pointer hover:bg-neutral-950 transition">
      <FaPlus className="" />
    </div>
  );
}

export default Page;
