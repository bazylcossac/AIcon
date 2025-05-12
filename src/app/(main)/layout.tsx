import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/dashboard_navbar/Navbar";
import Header from "@/components/dashboard_header/Header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-16">
        <Header />
      </div>
      {/* header */}
      <div className="flex flex-row h-[calc(100vh-4rem)]">
        <div>
          <Navbar />
        </div>
        <SessionProvider>
          <div className="bg-neutral-800 rounded-lg w-full m-2 overflow-y-auto">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </div>
        </SessionProvider>
      </div>
    </div>
  );
}

export default layout;
