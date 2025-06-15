import { ActionType } from "@/lib/types";

export type TTSFormTypes = {
  dispatch: React.ActionDispatch<[action: ActionType]>;
  generatingVoice: boolean;
  setGeneratingVoice: React.Dispatch<React.SetStateAction<boolean>>;
  setFileUrl: React.Dispatch<React.SetStateAction<string>>;
  state: {
    model: string;
    instructions: string;
    voice: string;
    responseFormat: "mp3" | "wav";
    message: string;
  };
  setBufferData: React.Dispatch<
    React.SetStateAction<
      | {
          buffer: ArrayBuffer;
          responseFormat: string;
        }
      | undefined
    >
  >;
};
