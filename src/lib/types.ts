export const initalArgs = {
  model: "",
  instructions: "",
  voice: "",
  speed: 1.0,
  responseFormat: "" as "mp3" | "wav",
  message: "",
};

export type InitialType = typeof initalArgs;

export type ActionType =
  | { type: "SET_MODEL"; payload: string }
  | { type: "SET_INSTRUCTIONS"; payload: string }
  | { type: "SET_VOICE"; payload: string }
  | { type: "SET_SPEED"; payload: number }
  | { type: "SET_FORMAT"; payload: "mp3" | "wav" }
  | { type: "SET_MESSAGE"; payload: string };
