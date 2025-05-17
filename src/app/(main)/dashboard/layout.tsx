export const experimental_ppr = true;
import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/dashboard_header/Header"), {
  loading: () => <p></p>,
});
const Navbar = dynamic(() => import("@/components/dashboard_navbar/Navbar"), {
  loading: () => <p></p>,
});

import { auth } from "@/auth";
import Loading from "@/components/Loading";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="w-full h-full overflow-y-hidden">
      <div className="w-full h-14">
        <Header session={session!} />
      </div>
      {/* header */}
      <div className="flex flex-row h-[calc(100vh-3.5rem)]">
        <div>
          <Navbar session={session!} />
        </div>
        <Suspense fallback={<Loading />}>
          <SessionProvider>
            <div className="bg-neutral-800 rounded-lg w-full h-full m-2 ">
              {children}
            </div>
          </SessionProvider>
        </Suspense>
      </div>
    </div>
  );
}

export default layout;
