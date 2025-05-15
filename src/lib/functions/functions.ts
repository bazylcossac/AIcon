import { InitialType } from "../types";

export function checkIfValid(state: InitialType) {
  const errorArr = [] as string[] | [];

  for (const key in state) {
    console.log(key);
    if (typeof state[key] === "string" && key !== "instructions") {
      if (!state[key]) {
        errorArr.push(`${key.toUpperCase()} is missing`);
      }
    }
  }

  return errorArr;
}
