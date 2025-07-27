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

export type TestActionType =
  | { type: "SET_SPORT"; payload: string }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_ODDS"; payload: string };

export const TestIntialState = {
  name: "all",
  sport: "all",
  odds: "0",
};

export type TestIntialType = typeof TestIntialState;

export type ImagesDB = {
  id: string;
  url: string;
  type: string;
  authorId: string;
  prompt: string;
  quality: string;
  size: string;
  createdAt: Date | null;
};

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
