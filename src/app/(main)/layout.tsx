import { SessionProvider } from "next-auth/react";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}

export default layout;
