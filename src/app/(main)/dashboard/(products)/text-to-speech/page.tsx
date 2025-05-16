"use client";
import React, { useReducer, useState } from "react";
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

export default function PageContent() {
  const userId = useSession().data?.user?.id;
  const [state, dispatch] = useReducer(reducer, initalArgs);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [generatingVoice, setGeneratingVoice] = useState(false);
  const matches = useMediaQuery();

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  return (
    <section className="h-full w-full flex overflow-y-hidden ">
      <div className="flex-1 flex-col justify-between ">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4">
          <p className="text-lg font-bold">Text to speech</p>
          <div className="flex flex-row items-center gap-1 text-white/70 hover:text-white transition">
            <GrStorage className="text-sm" />
            <Link href="/dashboard/storage" className="text-xs ">
              Storage
            </Link>
          </div>
        </div>

        <div className="h-9/12 flex flex-col-reverse items-center justify-center w-full">
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
        <div className="md:mx-14 mx-4 rounded-2xl flex flex-col mb-10 border-1 border-white/50 focus:border-green-300 focus:border-2 transition">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const errArr = checkIfValid(state);
              if (errArr.length > 0) {
                errArr.forEach((error) => {
                  toast(error);
                });
                return;
              } else {
                setGeneratingVoice(true);
                const fileUrl = await TSSOpenAIRequest(state, userId);
                setFileUrl(fileUrl);
                setGeneratingVoice(false);
              }
            }}
          >
            <textarea
              onChange={(e) =>
                dispatch({ type: "SET_MESSAGE", payload: e.target.value })
              }
              value={state.message}
              className="w-full p-4 rounded-2xl resize-none outline-none custom-scrollbar"
              placeholder="Enter your message..."
            ></textarea>
            <div className="flex justify-end m-2">
              <button
                className="bg-green-700 p-2 rounded-md hover:bg-green-800 transition cursor-pointer"
                type="submit"
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
      {matches && (
        <div className="flex flex-col md:min-w-[300px] border-l border-black gap-8 p-6 ">
          <TTSSettings state={state} dispatch={dispatch} />
        </div>
      )}
    </section>
  );
}
