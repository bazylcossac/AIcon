"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import TextToSpeechSettings from "./TTSSettings";
import { ActionType, InitialType } from "@/lib/types";

function TTSMobileSettings({
  state,
  dispatch,
}: {
  state: InitialType;
  dispatch: React.ActionDispatch<[action: ActionType]>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <RxHamburgerMenu onClick={() => setOpen(true)} />
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <TextToSpeechSettings state={state} dispatch={dispatch} />
        <button
          className="bg-white text-black rounded-sm font-semibold text-sm py-2 mt-2"
          onClick={() => setOpen(false)}
        >
          Save
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default TTSMobileSettings;
