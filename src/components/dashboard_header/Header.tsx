import { auth } from "@/auth";
import React from "react";
import { CgArrowsV } from "react-icons/cg";
async function Header() {
  const session = await auth();

  return (
    <>
      <nav className="h-full flex items-center mx-4">
        <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-1 cursor-pointer">
          <div className="bg-white rounded-full size-6 flex items-center justify-center text-black text-sm font-bold">
            <p>{session?.user?.name?.slice(0, 1)}</p>
          </div>
          <p className="text-xs">{session?.user?.name}</p>
          <CgArrowsV className="text-md text-white/70" />
        </div>
        <p className="font-bold text-white/50 mx-2">/</p>

        <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-1 cursor-pointer">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xs text-white">Default project</p>
            <CgArrowsV className="text-md text-white/70" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
