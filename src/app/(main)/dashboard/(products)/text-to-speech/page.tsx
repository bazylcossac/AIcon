"use client";
import React, { useEffect, useReducer, useState } from "react";
import { GrStorage } from "react-icons/gr";
import Link from "next/link";
import TTSSettings from "@/components/text_to_speech/TTSSettings";
import { initalArgs } from "@/lib/types";

import { reducer } from "@/lib/utils";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import TTSMobileSettings from "@/components/text_to_speech/TTSMobileSettings";
import { IoMdDownload } from "react-icons/io";
import WaveForm from "@/components/text_to_speech/WaveForm";
import TTSForm from "@/components/text_to_speech/TTSForm";

export default function TTSPage() {
  const matches = useMediaQuery();
  const [state, dispatch] = useReducer(reducer, initalArgs);
  const [fileUrl, setFileUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [generatingVoice, setGeneratingVoice] = useState(false);
  const [bufferData, setBufferData] = useState<{
    buffer: ArrayBuffer;
    responseFormat: string;
  }>();

  useEffect(() => {
    if (bufferData) {
      const blob = new Blob([bufferData.buffer], {
        type: `audio/${bufferData.responseFormat}`,
      });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    }
  }, [bufferData]);

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
          {downloadUrl && (
            <div className="flex justify-end text-white/50 my-3">
              <a
                download={`tts-${state.message
                  .replace(/\s+/g, "-")
                  .slice(0, 10)}`}
                href={downloadUrl}
              >
                <IoMdDownload className="bg-neutral-700 text-3xl rounded-md px-2 py-1 hover:bg-neutral-900 cursor-pointer " />
              </a>
            </div>
          )}
          <div className="flex flex-1 items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-4">
              {fileUrl && !generatingVoice && (
                <WaveForm matches={matches} fileUrl={fileUrl} />
              )}
              {generatingVoice && (
                <p className="text-lg animate-pulse text-white/30">
                  generating...
                </p>
              )}
            </div>
          </div>
          <div className="w-11/12 md:h-36 md:w-8/12 mx-auto mb-8 rounded-2xl border-1 border-white/50 focus-within:border-green-300 focus-within:border-2 transition relative">
            <TTSForm
              dispatch={dispatch}
              setGeneratingVoice={setGeneratingVoice}
              generatingVoice={generatingVoice}
              setFileUrl={setFileUrl}
              state={state}
              setBufferData={setBufferData}
            />
          </div>
        </div>
      </div>

      <div className="flex-col md:min-w-[300px] border-l border-black gap-8 p-6 hidden md:flex">
        <TTSSettings state={state} dispatch={dispatch} />
      </div>
    </section>
  );
}
