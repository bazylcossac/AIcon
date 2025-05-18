import { dateDuration } from "drizzle-orm/gel-core";

export const initalArgs = {
  model: "gpt-4o-mini-tts",
  instructions: "",
  voice: "ash",
  responseFormat: "mp3" as "mp3" | "wav",
  message: "",
};

export type InitialType = typeof initalArgs;

export type ActionType =
  | { type: "SET_MODEL"; payload: string }
  | { type: "SET_INSTRUCTIONS"; payload: string }
  | { type: "SET_VOICE"; payload: string }
  | { type: "SET_FORMAT"; payload: "mp3" | "wav" }
  | { type: "SET_MESSAGE"; payload: string };

type complex = {
  a: string;
  b: string;
} & {
  c: boolean;
} & {
  d: string[];
};

type Prettify<T> = {
  [K in keyof T]: T[K];
};
type test = Prettify<complex>;

type foo = "a" | "b" | 1;

type bar = Exclude<foo, string>;

type Foo = {
  name: string;
  age: string;
};

type getFoo = {
  [K in keyof Foo as `get${Capitalize<K>}`]: () => Foo[K];
};
