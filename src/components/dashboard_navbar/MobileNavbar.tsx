"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger className="mr-4 md:hidden">
        <RxHamburgerMenu onClick={() => setOpen(true)} />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black border-white/50">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="min-w-[200px] mt-2 sm:text-3xl">
          <div className="mx-1.75">
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                GET STARTED
              </h2>
              <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className={cn("text-white/70", {
                    "bg-neutral-700 text-white": pathName === "/dashboard",
                  })}
                >
                  Overview
                </Link>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                PRODUCTS
              </h2>
              <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
                  onClick={() => setOpen(false)}
                  href="/dashboard/images"
                  className={cn("text-white/70", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/images",
                  })}
                >
                  Images
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/dashboard/speech-to-text"
                  className={cn("text-white/70", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/speech-to-text",
                  })}
                >
                  Speech To Text
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/dashboard/text-to-speech"
                  className={cn("text-white/70 ", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/text-to-speech",
                  })}
                >
                  Text To Speech
                </Link>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                STORAGE
              </h2>
              <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
                  onClick={() => setOpen(false)}
                  href="/dashboard/storage"
                  className={cn("text-white/70", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/storage",
                  })}
                >
                  Storage
                </Link>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                COSTS
              </h2>
              <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-white/70 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
                  onClick={() => setOpen(false)}
                  href="/dashboard/tokens"
                  className={cn("text-white/70 ", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/tokens",
                  })}
                >
                  Buy Tokens
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/dashboard/costs"
                  className={cn("text-white/70 ", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/costs",
                  })}
                >
                  Costs
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
