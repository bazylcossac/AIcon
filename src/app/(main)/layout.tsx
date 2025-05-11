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
        <nav className=" min-w-[200px] mt-2">
          <div className="mx-1.25">
            <div className="border rounded-md p-2 border-white/40 text-white/40 flex flex-row items-center mb-6 hover:border-white hover:text-white cursor-pointer transition">
              <CiSearch className="text-lg mr-2" />
              <p className="select-none">Search</p>
            </div>
            <h2>PRODUCTS</h2>
            <ul>
              <li>
                <Link href="/dashboard/icons">Icons</Link>
              </li>
              <li>
                <Link href="/dashboard/text-to-speech">Text to Speech</Link>
              </li>
            </ul>
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
