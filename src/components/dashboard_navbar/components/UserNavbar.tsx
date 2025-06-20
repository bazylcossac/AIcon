"use client";
import { cn } from "@/lib/utils";
import useUserStore from "@/store/UserStore/User.bear";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function UserNavbar() {
  const pathName = usePathname();
  const selecteduserProjectId = useUserStore(
    (state) => state.selectedUserProjectId
  );
  return (
    <>
      <div className="">
        <h2
          className={cn("text-xs font-bold tracking-widest mb-2 mx-4", {
            "text-neutral-600": !selecteduserProjectId,
          })}
        >
          PRODUCTS
        </h2>
        <ul
          className={cn(
            "flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75  [&>*]:rounded-md [&>*]:px-4",
            {
              "[&>*]:transition [&>*]:cursor-pointer [&>*]:hover:text-white [&>*]:hover:bg-neutral-700":
                selecteduserProjectId,
            }
          )}
        >
          <Link
            href={selecteduserProjectId ? "/dashboard/images" : "/dashboard"}
            className={cn("text-white/70", {
              "bg-neutral-700 text-white": pathName === "/dashboard/images",
              "text-neutral-700 cursor-default": !selecteduserProjectId,
            })}
          >
            Images
          </Link>

          <Link
            href={
              selecteduserProjectId ? "/dashboard/text-to-speech" : "/dashboard"
            }
            className={cn("text-white/70 ", {
              "bg-neutral-700 text-white":
                pathName === "/dashboard/text-to-speech",
              "text-neutral-700 cursor-default": !selecteduserProjectId,
            })}
          >
            Text to Speech
          </Link>

          <Link
            href={
              selecteduserProjectId ? "/dashboard/speech-to-text" : "/dashboard"
            }
            className={cn("text-white/70", {
              "bg-neutral-700 text-white":
                pathName === "/dashboard/speech-to-text",
              "text-neutral-700 cursor-default": !selecteduserProjectId,
            })}
          >
            Speech to Text
          </Link>
        </ul>
      </div>

      <div className="mt-6">
        <h2
          className={cn("text-xs font-bold tracking-widest mb-2 mx-4", {
            "text-neutral-600": !selecteduserProjectId,
          })}
        >
          STORAGE
        </h2>
        <ul
          className={cn(
            "flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:rounded-md [&>*]:px-4",
            {
              "[&>*]:transition [&>*]:cursor-pointer [&>*]:hover:text-white [&>*]:hover:bg-neutral-700":
                selecteduserProjectId,
            }
          )}
        >
          <Link
            href={selecteduserProjectId ? "/dashboard/storage" : "/dashboard"}
            className={cn("text-white/70", {
              "bg-neutral-700 text-white": pathName === "/dashboard/storage",
              "text-neutral-700 cursor-default": !selecteduserProjectId,
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
