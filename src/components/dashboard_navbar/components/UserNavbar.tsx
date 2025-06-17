"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function UserNavbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="">
        <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
          PRODUCTS
        </h2>
        <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
          <Link
            href="/dashboard/images"
            className={cn("text-white/70", {
              "bg-neutral-700 text-white": pathName === "/dashboard/images",
            })}
          >
            Images
          </Link>

          <Link
            href="/dashboard/text-to-speech"
            className={cn("text-white/70 ", {
              "bg-neutral-700 text-white":
                pathName === "/dashboard/text-to-speech",
            })}
          >
            Text to Speech
          </Link>

          <Link
            href="/dashboard/speech-to-text"
            className={cn("text-white/70", {
              "bg-neutral-700 text-white":
                pathName === "/dashboard/speech-to-text",
            })}
          >
            Speech to Text
          </Link>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">STORAGE</h2>
        <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
          <Link
            href="/dashboard/storage"
            className={cn("text-white/70", {
              "bg-neutral-700 text-white": pathName === "/dashboard/storage",
            })}
          >
            Storage
          </Link>
        </ul>
      </div>
    </>
  );
}

export default UserNavbar;
