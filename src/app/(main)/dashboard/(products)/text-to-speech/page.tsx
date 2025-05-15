"use client";
import React, { useReducer, useState } from "react";
import { GrStorage } from "react-icons/gr";
import Link from "next/link";
import TTSSettings from "@/components/text_to_speech/TTSSettings";
import { ActionType, initalArgs, InitialType } from "@/lib/types";
import { TSSOpenAIRequest } from "@/actions/actions";
import { useSession } from "next-auth/react";
import WavesurferPlayer from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";

function reducer(state: InitialType, action: ActionType): InitialType {
  switch (action.type) {
    case "SET_MODEL":
      return { ...state, model: action.payload };
    case "SET_INSTRUCTIONS":
      return { ...state, instructions: action.payload };
    case "SET_VOICE":
      return { ...state, voice: action.payload };
    case "SET_SPEED":
      return { ...state, speed: action.payload };
    case "SET_FORMAT":
      return { ...state, responseFormat: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
  }
}

export default function PageContent() {
  const userId = useSession().data?.user?.id;
  const [state, dispatch] = useReducer(reducer, initalArgs);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

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
    <section className="h-full w-full flex">
      <div className="flex-1 flex-col justify-between">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4">
          <p className="text-lg font-bold">Text to speech</p>
          <div className="flex flex-row items-center gap-1 text-white/70 hover:text-white transition">
            <GrStorage className="text-sm" />
            <Link href="/dashboard/storage" className="text-xs ">
              Storage
            </Link>
          </div>
        </div>

        <div
          className="h-9/12 flex flex-col-reverse items-center justify-center w-full"
          // ref={waveformContainerRef}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            {fileUrl && (
              <>
                <WavesurferPlayer
                  height={70}
                  width="35vw"
                  waveColor="green"
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
          </div>
        </div>
        <div className="mx-14 rounded-2xl flex flex-col  mb-10 border-1 border-white/50 focus:border-green-300 focus:border-2 transition">
          <form
            action={async () => {
              const fileUrl = await TSSOpenAIRequest(state, userId);
              setFileUrl(fileUrl);
            }}
          >
            <textarea
              onChange={(e) =>
                dispatch({ type: "SET_MESSAGE", payload: e.target.value })
              }
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
      <div className="flex flex-col md:min-w-[300px] border-l border-black gap-8 p-6">
        <TTSSettings state={state} dispatch={dispatch} />
      </div>
    </section>
  );
}

// function Page() {
//   return <Suspense fallback={<div>loading...</div>}>
//     <PageContent />
//   </Suspense>;
// }

// export default Page;
