import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  ActionType,
  InitialType,
  TestActionType,
  TestIntialType,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function reducer(state: InitialType, action: ActionType): InitialType {
  switch (action.type) {
    case "SET_MODEL":
      return { ...state, model: action.payload };
    case "SET_INSTRUCTIONS":
      return { ...state, instructions: action.payload };
    case "SET_VOICE":
      return { ...state, voice: action.payload };
    case "SET_FORMAT":
      return { ...state, responseFormat: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
  }
}

export function testReducer(
  state: TestIntialType,
  action: TestActionType
): TestIntialType {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SPORT":
      return { ...state, sport: action.payload };
    case "SET_ODDS":
      return { ...state, odds: action.payload.toString() };
    default:
      return state
  }
}
