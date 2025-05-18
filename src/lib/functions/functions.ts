import { InitialType } from "../types";

export function checkIfValid(state: InitialType) {
  const errorArr: string[] = [];

  for (const key in state) {
    if (
      typeof state[key as keyof InitialType] === "string" &&
      key !== "instructions"
    ) {
      if (!state[key as keyof InitialType]) {
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
