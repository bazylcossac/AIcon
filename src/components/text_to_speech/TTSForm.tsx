"use client";
import { TSSOpenAIRequest } from "@/actions/actions";
import { checkIfValid } from "@/lib/functions/functions";
import { ActionType } from "@/lib/types";
import { useSession } from "next-auth/react";
import React, { FormEvent } from "react";
import { toast } from "sonner";
import { TTSFormTypes } from "./TTSTypes";
import {
  hasUserTokens,
  useUserStoreWithEq,
} from "@/store/UserStore/User.selectors";
import { cn } from "@/lib/utils";

function TTSForm({
  dispatch,
  setGeneratingVoice,
  setBufferData,
  setFileUrl,
  state,
  generatingVoice,
}: TTSFormTypes) {
  const userId = useSession().data?.user?.id;
  const canUserGenerate = useUserStoreWithEq(hasUserTokens);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errArr = checkIfValid(state);
    if (errArr.length > 0) {
      errArr.forEach((error) => {
        toast(error);
      });
      return;
    } else {
      setGeneratingVoice(true);
      const { url, buffer, responseFormat } = await TSSOpenAIRequest(
        state,
        userId
      );
      setFileUrl(url);
      setBufferData({ buffer, responseFormat });
      setGeneratingVoice(false);
    }
  };

  return (
    <>
      <form onSubmit={async (e) => handleSubmit(e)}>
        <textarea
          onChange={(e) =>
            dispatch({ type: "SET_MESSAGE", payload: e.target.value })
          }
          value={state.message}
          className={cn(
            "p-6 rounded-2xl resize-none outline-none custom-scrollbar text-sm  md:text-md w-11/12 text-md placeholder:text-white/30",
            {
              "bg-black": canUserGenerate,
            }
          )}
          placeholder={
            generatingVoice
              ? "Generating..."
              : canUserGenerate
              ? "Enter your message..."
              : "No tokens"
          }
          maxLength={250}
          disabled={!canUserGenerate || generatingVoice}
        ></textarea>
        <div className="flex justify-end m-2 absolute right-0 bottom-0">
          <button
            className="bg-green-700 text-xs p-1 md:p-2 text-md rounded-md hover:bg-green-800 transition cursor-pointer "
            type="submit"
            disabled={!canUserGenerate || generatingVoice}
          >
            Generate
          </button>
        </div>
      </form>
    </>
  );
}

export default TTSForm;
