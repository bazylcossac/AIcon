"use client";
import Link from "next/link";
import React from "react";
import { GrStorage } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";

const emptyArr = new Array(20).fill("");

function page() {
  return (
    <div className="overflow-y-auto">
      <div className="">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4">
          <p className="text-lg font-bold">Images</p>
          <div className="flex flex-row items-center gap-4 [&>*]:text-white/70 [&>*]:hover:text-white [&>*]:cursor-pointer transition">
            <div className="flex flex-row items-center gap-1 ">
              <MdOutlineCleaningServices className="text-sm" />
              <p className="text-xs">Clean</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <GrStorage className="text-sm" />
              <Link href="/dashboard/storage" className="text-xs ">
                Storage
              </Link>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,1fr))] sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {emptyArr.map((el, index) => (
            <div key={index} className="size-92 border-2 bg-red-300">
              d
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
