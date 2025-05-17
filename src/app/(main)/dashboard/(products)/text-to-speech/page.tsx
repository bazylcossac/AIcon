"use client";
import React, { FormEvent, useReducer, useState } from "react";
import { GrStorage } from "react-icons/gr";
import Link from "next/link";
import TTSSettings from "@/components/text_to_speech/TTSSettings";
import { initalArgs } from "@/lib/types";
import { TSSOpenAIRequest } from "@/actions/actions";
import { useSession } from "next-auth/react";
import WavesurferPlayer from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";
import { checkIfValid } from "@/lib/functions/functions";
import { toast } from "sonner";
import { reducer } from "@/lib/utils";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import TTSMobileSettings from "@/components/text_to_speech/TTSMobileSettings";

export default function TTSPage() {
  const matches = useMediaQuery();
  const userId = useSession().data?.user?.id;
  const [state, dispatch] = useReducer(reducer, initalArgs);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [generatingVoice, setGeneratingVoice] = useState(false);

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

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
      dispatch({ type: "SET_MESSAGE", payload: "" });
      const fileUrl = await TSSOpenAIRequest(state, userId);
      setFileUrl(fileUrl);
      setGeneratingVoice(false);
    }
  };

  return (
    <section className="h-full w-full flex">
      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4  ">
          {!matches && (
            // mobile
            <div className="flex flex-row items-center justify-between gap-2 md:hidden w-full text-white/70">
              <div className="flex items-center gap-1">
                <TTSMobileSettings state={state} dispatch={dispatch} />
                <p className="text-sm font-bold">Text to speech</p>
              </div>
              <div className="flex items-center gap-1">
                <GrStorage className="text-sm" />
                <Link href="/dashboard/storage" className="text-xs ">
                  Storage
                </Link>
              </div>
            </div>
          )}

          <div className="flex-row items-center justify-between w-full gap-1 text-white/70 hover:text-white transition hidden md:flex">
            <p className="text-lg font-bold">Text to speech</p>
            <div className="items-center gap-1 hidden md:flex">
              <GrStorage className="text-sm" />
              <Link href="/dashboard/storage" className="text-xs ">
                Storage
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex flex-col h-full px-4 ">
          <div className="flex flex-1 items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-4">
              {fileUrl && !generatingVoice && (
                <>
                  <WavesurferPlayer
                    height={70}
                    width="35vw"
                    waveColor="#016630"
                    dragToSeek
                    normalize
                    url={fileUrl}
                    onReady={onReady}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  <button
                    onClick={onPlayPause}
                    className="bg-green-700 px-2 py-1 rounded-md cursor-pointer hover:bg-green-800"
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </>
              )}
              {generatingVoice && (
                <p className="text-lg animate-pulse text-white/30">
                  generating...
                </p>
              )}
            </div>
          </div>

          <div className="w-11/12 md:h-36 md:w-8/12 mx-auto mb-8 rounded-2xl border-1 border-white/50 focus-within:border-green-300 focus-within:border-2 transition relative">
            <form onSubmit={async (e) => handleSubmit(e)}>
              <textarea
                onChange={(e) =>
                  dispatch({ type: "SET_MESSAGE", payload: e.target.value })
                }
                value={state.message}
                className="p-6 rounded-2xl resize-none outline-none custom-scrollbar text-sm  md:text-md w-11/12 text-md placeholder:text-white/30"
                placeholder="Enter your message..."
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

      <div className="flex-col md:min-w-[300px] border-l border-black gap-8 p-6 hidden md:flex">
        <TTSSettings state={state} dispatch={dispatch} />
      </div>
    </section>
  );
}
