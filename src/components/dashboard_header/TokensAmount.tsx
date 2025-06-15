"use client";
import { cn } from "@/lib/utils";
import {
  getUserTokens,
  useUserStoreWithEq,
} from "@/store/UserStore/User.selectors";
import React from "react";

function TokensAmount() {
  const userTokens = useUserStoreWithEq(getUserTokens);
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
