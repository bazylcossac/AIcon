"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
// searchParams: { [key: string]: string | string[] | undefined };
function TextToSpeechSettings() {
  return (
    <>
      <div className="">
        <p className="mb-2">Model</p>
        <Select required>
          <SelectTrigger className="w-[180px]  border-white/50">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white">
            <SelectItem value="gpt-4o-mini-tts">fotball</SelectItem>
            <SelectItem value="gpt-4o-mini-tts">volleyball</SelectItem>
            <SelectItem value="gpt-4o-mini-tts">tenis</SelectItem>
            <SelectItem value="gpt-4o-mini-tts">handball</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="mb-2">Instructions</p>
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
        <p>Odds</p>
        <Input type="number" />
      </div>
    </>
  );
}

export default TextToSpeechSettings;
