import { create } from "zustand";
import { GeneratedImageType } from "./storeTypes";

type mainStore = {
  generatedImages: GeneratedImageType[];
  addToGeneratedImages: (genImage: GeneratedImageType) => void;
};

export const useStore = create<mainStore>((set, get) => ({
  generatedImages: [] as GeneratedImageType[],
  addToGeneratedImages: (genImage: GeneratedImageType) =>
    set((state) => ({ generatedImages: [...state.generatedImages, genImage] })),
}));
