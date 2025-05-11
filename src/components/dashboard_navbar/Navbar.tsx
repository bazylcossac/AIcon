"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import SearchInput from "./SearchInput";

function Navbar() {
  const [shortCut, setShortcut] = useState<"CTRL" | "⌘" | "">("");

  useEffect(() => {
    const system = navigator.userAgent.toLowerCase();
    if (system.includes("win")) {
      setShortcut("CTRL");
    }
    if (system.includes("mac")) {
      setShortcut("⌘");
    }
  }, []);

  if (!shortCut) return null;

  return (
    <nav className=" min-w-[200px] mt-2 ">
      <div className="mx-1.75">
        <SearchInput shortCut={shortCut} />

        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
            GET STARTED
          </h2>
          <ul className="[&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
            <li>
              <Link href="/dashboard">Overview</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
            PRODUCTS
          </h2>
          <ul className="[&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
            <li>
              <Link href="/dashboard/icons">Icons</Link>
            </li>
            <li>
              <Link href="/dashboard/text-to-speech">Text to Speech</Link>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">COSTS</h2>
          <ul className="[&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
            <li>
              <Link href="/dashboard/tokens">Buy Tokens</Link>
            </li>
            <li>
              <Link href="/dashboard/text-to-speech">Costs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
