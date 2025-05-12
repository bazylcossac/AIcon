"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/appStore";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";

function SearchInputDialog() {
  const showSearchBarDialog = useAppStore((state) => state.showSearchBarDialog);
  const setShowSearchBarDialog = useAppStore(
    (state) => state.setShowSearchBarDialog
  );
  return (
    <Dialog open={showSearchBarDialog} onOpenChange={setShowSearchBarDialog}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="bg-black border-none outline-none ring-0 [&>button]:hidden ">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-row items-center justify-center border-1 border-white/50 px-2 rounded-md ">
          <CiSearch className="text-lg mr-2" />
          <Input
            className="ring-0  border-0 focus-visible:ring-offset-0 focus-visible:ring-0 "
            placeholder="Search"
          />
        </div>

        <p className="text-sm text-white/30 text-center">No results</p>
      </DialogContent>
    </Dialog>
  );
}

export default SearchInputDialog;
