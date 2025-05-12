import { cn } from "@/lib/utils";
import React from "react";

function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={cn("bg-neutral-600 rounded-md animate-pulse", className)}
    ></div>
  );
}

function NavbarSkeleton() {
  return (
    <div className="min-w-[200px] mt-2 hidden md:flex md:flex-col">
      <div className="mx-1.75">
        <Skeleton className="h-8 w-full mb-8" />
        <div className="flex flex-col gap-2 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>
    </div>
  );
}

export default NavbarSkeleton;
