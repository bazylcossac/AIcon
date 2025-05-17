"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrStorage } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";

function ImagesPage() {
  const [imagePrompt, setImagePropmpt] = useState("");

  return (
    <div className=" w-full h-full">
      <div className="w-full h-full">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4 text-white/70">
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
        <div className=" h-full overflow-y-auto flex flex-col">
          <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "></div>
          <div className="w-11/12 mx-auto mt-auto mb-20 rounded-2xl border-1 border-white/50 focus-within:border-green-300 focus-within:border-2 transition ">
            <form className="relative">
              <textarea
                className="p-4 rounded-2xl resize-none outline-none custom-scrollbar text-xs md:text-md w-11/12"
                placeholder="Enter your message..."
                value={imagePrompt}
                onChange={(e) => setImagePropmpt(e.target.value)}
              ></textarea>
              <div className="flex justify-end m-2 absolute right-0 bottom-0">
                <button
                  className="bg-green-700 text-xs p-1 md:p-2 text-md rounded-md hover:bg-green-800 transition cursor-pointer "
                  type="submit"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
