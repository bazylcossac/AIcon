import { create } from "zustand";
import { GeneratedImageType } from "./storeTypes";

export const useStore = create((set, get) => ({
  generatedImages: [] as GeneratedImageType[],
}));
