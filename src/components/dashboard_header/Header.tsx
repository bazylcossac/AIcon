import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import { CgArrowsV } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
async function Header() {
  const session = await auth();

  return (
    <>
      <nav className="h-full flex items-center justify-between mx-4">
        <div className="flex flex-row items-center">
          <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-1 cursor-pointer">
            <div className="bg-white rounded-full size-6 flex items-center justify-center text-black text-sm font-bold">
              <p>{session?.user?.name?.slice(0, 1)}</p>
            </div>
            <p className="text-xs">{session?.user?.name}</p>
            <CgArrowsV className="text-md text-white/70" />
          </div>
          <p className="font-bold text-white/50 mx-2">/</p>

          <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-2 cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-xs text-white">Default project</p>
              <CgArrowsV className="text-md text-white/70" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/dashboard"
            className="text-sm text-white/70 hover:text-white"
          >
            Dashboard
          </Link>
          <IoSettingsOutline className="font-bold text-white/70 hover:text-white cursor-pointer" />
          <Image
            src={session!.user!.image!}
            alt="user image"
            width={25}
            height={25}
            quality={100}
            className="rounded-full"
          />
        </div>
      </nav>
    </>
  );
}

export default Header;
