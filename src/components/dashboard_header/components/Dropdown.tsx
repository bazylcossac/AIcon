import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgArrowsV } from "react-icons/cg";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <div className="items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-2 cursor-pointer hidden md:flex">
          <div className="flex flex-row gap-2 items-center ">
            <p className="text-xs text-white">Default project</p>
            <CgArrowsV className="text-md text-white/70" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black text-white border-none outline-none">
        <DropdownMenuLabel>Projects</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
