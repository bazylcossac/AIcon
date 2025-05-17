import { base } from "motion/react-client";
import { InitialType } from "../types";

export function checkIfValid(state: InitialType) {
  const errorArr = [] as string[] | [];

  for (const key in state) {
    if (typeof state[key] === "string" && key !== "instructions") {
      if (!state[key]) {
        errorArr.push(`${key.toUpperCase()} is missing`);
      }
    }
  }

  return errorArr;
}

export function base64ToUInt(base64: string) {
  const byteCharacters = atob(base64);
  const byteArr = [];

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArr.push(byteCharacters.charCodeAt(i));
  }

  const uintArr = new Uint8Array(byteArr);

  return uintArr;
}
