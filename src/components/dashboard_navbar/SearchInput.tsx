"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput({ shortCut }: { shortCut: "CTRL" | "⌘" }) {
  //   const systemIcon = useMemo(() => {
  //     if (typeof navigator === "undefined") return null;
  //     const system = navigator.userAgent.toLowerCase();
  //     if (system.includes("win")) {
  //       return "CTRL";
  //     }
  //     if (system.includes("mac")) {
  //       return "⌘";
  //     }
  //   }, []);

  //   if (!systemIcon) return null;
  // useEffect(() => {
  //     document.body.addEventListener("")
  // }, [])

  return (
    <div className="border rounded-md p-2 border-white/40 text-white/40 flex flex-row items-center mb-6 hover:border-white/70 hover:text-white/70 cursor-pointer transition">
      <CiSearch className="text-lg mr-2" />
      <p className="select-none text-sm">Search</p>
      <div className="flex flex-row items-center gap-1 ml-auto font-smemibold">
        <div className="text-white/70 bg-neutral-700 rounded-sm px-0.75 py-0.25 text-xs">
          {shortCut}
        </div>
        <div className="text-white/70 bg-neutral-700 rounded-sm px-1.25 py-0.25 text-xs">
          K
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
