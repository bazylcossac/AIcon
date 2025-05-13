"use client";
import React from "react";
import { GrStorage } from "react-icons/gr";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

function Page() {
  return (
    <section className="h-full w-full flex">
      <div className="flex-1">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4">
          <p className="text-lg font-bold">Text to speech</p>
          <div className="flex flex-row items-center gap-1 text-white/70 hover:text-white transition">
            <GrStorage className="text-sm" />
            <Link href="/dashboard/storage" className="text-xs ">
              Storage
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:min-w-[300px] border-l border-black gap-8 p-6">
        <div className="flex flex-col">
          <p className="mb-2">Model</p>
          <Select required>
            <SelectTrigger className="w-[180px]  border-white/50">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-700 text-white ">
              <SelectItem value="gpt-4o-mini-tts">gp4-4o-mini-tts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="mb-2">Instructions</p>
          <textarea
            placeholder="Speak as native american..."
            className="w-full h-32 border-1 border-white/50 resize-none rounded-md p-2 outline-none  focus:border-green-300 focus:border-2 transition"
          ></textarea>
        </div>
        <div>
          <p className="mb-2">Voice</p>
          <Select required>
            <SelectTrigger className="w-[180px] border-white/50">
              <SelectValue placeholder="Select voice" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-700 text-white ">
              <SelectItem value="alloy">Alloy</SelectItem>
              <SelectItem value="ash">Ash</SelectItem>
              <SelectItem value="ballad">Ballad</SelectItem>
              <SelectItem value="coral">Coral</SelectItem>
              <SelectItem value="echo">Echo</SelectItem>
              <SelectItem value="fable">Fable</SelectItem>
              <SelectItem value="onyx">Onyx</SelectItem>
              <SelectItem value="nova">Nova</SelectItem>
              <SelectItem value="sage">Sage</SelectItem>
              <SelectItem value="shimmer">Shimmer</SelectItem>
              <SelectItem value="verse">Verse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="mb-2">Speed</p>
          <Slider
            defaultValue={[1.0]}
            max={4}
            min={0.25}
            step={0.25}
            className=""
          />
        </div>
        <div>
          <p className="mb-2">Response format</p>
          <Select required>
            <SelectTrigger className="w-[180px]  border-white/50">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-700 text-white ">
              <SelectItem value="mp3">MP3</SelectItem>
              <SelectItem value="wav">WAV</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default Page;
