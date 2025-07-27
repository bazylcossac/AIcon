"use client";
import React, { useEffect, useReducer } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
import useFilters from "@/lib/hooks/useFilters";
import { TestIntialState } from "@/lib/types";
import { testReducer } from "@/lib/utils";

// searchParams: { [key: string]: string | string[] | undefined };

function TextToSpeechSettings() {
  const { filters, setFilters } = useFilters();
  const [state, dispatch] = useReducer(testReducer, TestIntialState);

  useEffect(() => {
    dispatch({ type: "SET_NAME", payload: filters.name });
    dispatch({ type: "SET_ODDS", payload: filters.odds });
    dispatch({ type: "SET_SPORT", payload: filters.sport });
  }, [filters]);

  useEffect(() => {
    setFilters({ name: state.name, odds: state.odds, sport: state.sport });
  }, [state.name, state.sport, state.odds, setFilters]);

  return (
    <>
      <div className="">
        <p className="mb-2">Model</p>
        <Select
          required
          defaultValue={state.sport}
          onValueChange={(value) =>
            dispatch({ type: "SET_SPORT", payload: value })
          }
        >
          <SelectTrigger className="w-[180px]  border-white/50">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="fotball">fotball</SelectItem>
            <SelectItem value="volleyball">volleyball</SelectItem>
            <SelectItem value="tennis">tenis</SelectItem>
            <SelectItem value="handball">handball</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="mb-2">Instructions</p>
      </div>
      <div>
        <p className="mb-2">Voice</p>
        <Select
          required
          defaultValue={state.name}
          onValueChange={(value) =>
            dispatch({ type: "SET_NAME", payload: value })
          }
        >
          <SelectTrigger className="w-[180px] border-white/50">
            <SelectValue placeholder="Select voice" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white ">
            <SelectItem value="all">All</SelectItem>
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
        <Input
          type="number"
          defaultValue={state.odds}
          onChange={(value) =>
            dispatch({
              type: "SET_ODDS",
              payload: value.toString(),
            })
          }
        />
      </div>
    </>
  );
}

export default TextToSpeechSettings;
