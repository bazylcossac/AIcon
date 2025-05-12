import { auth } from "@/auth";
import Link from "next/link";
import React, { Suspense } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
// import HeaderClient from "./HeaderClient";
import dynamic from "next/dynamic";
import { Session } from "next-auth";
const HeaderClient = dynamic(() => import("./HeaderClient"));
async function Header({ session }: { session: Session }) {
  return (
    <>
      <nav className="h-full flex items-center justify-between mx-4">
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderClient session={session} />
        </Suspense>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/dashboard"
            className="text-sm text-white/70 hover:text-white hidden md:inline-block"
          >
            Dashboard
          </Link>
          <IoSettingsOutline className="font-bold text-white/70 hover:text-white cursor-pointer hidden md:inline-block" />
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
