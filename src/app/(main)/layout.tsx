import React from "react";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-16 ">header</div>
      {/* header */}
      <div className="flex flex-row h-[calc(100vh-4rem)]">
        <nav className=" min-w-[200px] mt-2 ">
          <div className="mx-1.75">
            <div className="border rounded-md p-2 border-white/40 text-white/40 flex flex-row items-center mb-6 hover:border-white/70 hover:text-white/70 cursor-pointer transition">
              <CiSearch className="text-lg mr-2" />
              <p className="select-none text-sm">Search</p>
              <div className="flex flex-row items-center gap-1 ml-auto font-smemibold">
                <div className="text-white/70 bg-neutral-700 rounded-sm px-0.75 py-0.25 text-xs">
                  ⌘
                </div>
                <div className="text-white/70 bg-neutral-700 rounded-sm px-1.25 py-0.25 text-xs">
                  K
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                GET STARTED
              </h2>
              <ul className="[&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <li>
                  <Link href="/dashboard">Overview</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                PRODUCTS
              </h2>
              <ul className="[&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <li>
                  <Link href="/dashboard/icons">Icons</Link>
                </li>
                <li>
                  <Link href="/dashboard/text-to-speech">Text to Speech</Link>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                COSTS
              </h2>
              <ul className="[&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <li>
                  <Link href="/dashboard/tokens">Buy Tokens</Link>
                </li>
                <li>
                  <Link href="/dashboard/text-to-speech">Costs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <SessionProvider>
          <div className="bg-neutral-800 rounded-lg w-full m-2 overflow-y-auto">
            {children}
          </div>
        </SessionProvider>
      </div>
    </div>
  );
}

export default layout;
