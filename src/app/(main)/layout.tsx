import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";

import Navbar from "@/components/dashboard_navbar/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-16 ">header</div>
      {/* header */}
      <div className="flex flex-row h-[calc(100vh-4rem)]">
        <Suspense fallback={<p>Loading</p>}>
          <Navbar />
        </Suspense>
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
