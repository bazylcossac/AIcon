import React from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/dashboard_header/Header"));
const Navbar = dynamic(() => import("@/components/dashboard_navbar/Navbar"));
import { auth } from "@/auth";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="w-full h-full ">
      <div className="w-full h-14">
        <Header session={session!} />
      </div>
      {/* header */}
      <div className="flex flex-row h-[calc(100vh-3.5rem)]">
        <div>
          <Navbar session={session!} />
        </div>
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
