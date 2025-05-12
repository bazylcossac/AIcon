"use client";
import React from "react";
import { GrStorage } from "react-icons/gr";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Page() {
  return (
    <section className="h-full w-full flex">
      <div className="flex-1">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4">
          <p className="text-lg font-bold">Text to speech</p>
          <div className="flex flex-row items-center gap-1 text-white/70 hover:text-white transition">
            <GrStorage className="text-sm" />
            <Link href="/dashboard/storage" className="text-xs ">
              Storage
            </Link>
          </div>
        </div>
      </div>
      <div className="md:min-w-[300px] border-l border-black">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}

export default Page;
