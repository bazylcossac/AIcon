"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import SearchInput from "./SearchInput";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import { Session } from "next-auth";
import NavbarSkeleton from "./NavbarSkeleton";
import { useAppStore } from "@/store/appStore";
import SearchInputDialog from "../search_input_dialog/SearchInputDialog";

function Navbar({ session }: { session: Session }) {
  const [shortCut, setShortcut] = useState<"CTRL" | "⌘" | "">("");
  const showSearchBarDialog = useAppStore((state) => state.showSearchBarDialog);
  const pathName = usePathname();
  const isDesktop = useMediaQuery();
  useEffect(() => {
    const system = navigator.userAgent.toLowerCase();
    if (system.includes("win")) {
      setShortcut("CTRL");
    }
    if (system.includes("mac")) {
      setShortcut("⌘");
    }
  }, []);

  if (!shortCut) return <NavbarSkeleton />;

  if (!isDesktop) return null;

  if (isDesktop) {
    return (
      <nav className="min-w-[200px] h-full overflow-y-hidden mt-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,

            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="h-full"
        >
          <div className="mx-1.75">
            <SearchInput shortCut={shortCut} />

            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                GET STARTED
              </h2>
              <ul className="flex flex-col [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
                  href="/dashboard"
                  className={cn("text-white/70", {
                    "bg-neutral-700 text-white": pathName === "/dashboard",
                  })}
                >
                  Projects
                </Link>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                PRODUCTS
              </h2>
              <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
                  href="/dashboard/images"
                  className={cn("text-white/70", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/images",
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
              <h2 className="text-xs font-bold tracking-widest mb-2 mx-4">
                STORAGE
              </h2>
              <ul className="flex flex-col [&>*]:m-0.25 [&>*]:text-sm [&>*]:py-1.75 [&>*]:hover:text-white [&>*]:hover:bg-neutral-700 [&>*]:rounded-md [&>*]:px-4 [&>*]:transition [&>*]:cursor-pointer">
                <Link
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
                  href="/dashboard/tokens"
                  className={cn("text-white/70 ", {
                    "bg-neutral-700 text-white":
                      pathName === "/dashboard/tokens",
                  })}
                >
                  Buy Tokens
                </Link>

                <Link
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
        </motion.div>

        {showSearchBarDialog && <SearchInputDialog />}
      </nav>
    );
  }
}

export default Navbar;
