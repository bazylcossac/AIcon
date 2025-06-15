"use client";
import { cn } from "@/lib/utils";
import {
  getUserTokens,
  useUserStoreWithEq,
} from "@/store/UserStore/User.selectors";
import React, { useEffect } from "react";

function TokensAmount({ tokens }: { tokens: number }) {
  const userTokens = useUserStoreWithEq(getUserTokens);
  const setTokens = useUserStoreWithEq((state) => state.setUserTokens);

  useEffect(() => {
    setTokens(tokens);
  }, [tokens, setTokens]);

  return (
    <div
      className={cn("flex items-center", {
        "text-red-400": !userTokens,
      })}
    >
      <span className="text-sm font-bold mx-1">{userTokens}</span>
      Tokens
    </div>
  );
}

export default TokensAmount;
