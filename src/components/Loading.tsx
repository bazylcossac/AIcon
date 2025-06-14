import { cn } from "@/lib/utils";
import React from "react";

function Loading({
  classNamesBig,
  classNamesSmall,
}: {
  classNamesBig?: string;
  classNamesSmall?: string;
}) {
  return (
    <div className="flex-col gap-4 w-full h-full flex items-center justify-center">
      <div
        className={cn(
          "w-20 h-20 border-4 border-transparent text-neutral-400 text-4xl animate-spin flex items-center justify-center border-t-neutral-400 rounded-full",
          classNamesBig
        )}
      >
        <div
          className={cn(
            "w-16 h-16 border-4 border-transparent text-neutral-800 text-2xl animate-spin flex items-center justify-center border-t-neutral-800 rounded-full",
            classNamesSmall
          )}
        ></div>
      </div>
    </div>
  );
}

export default Loading;
