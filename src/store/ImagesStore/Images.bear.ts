import { create } from "zustand";
import { GeneratedImageType } from "../storeTypes";

export type InitiaValuesTypes = {
  generatedImages: GeneratedImageType[];
};

export type StoreActions = {
  addToGeneratedImages: (genImage: GeneratedImageType) => void;
};

export type ImagesStoreTypes = InitiaValuesTypes & StoreActions;

const useImagesStore = create<ImagesStoreTypes>((set, get) => ({
  generatedImages: [] as GeneratedImageType[],
  addToGeneratedImages: (genImage: GeneratedImageType) =>
    set(() => ({ generatedImages: [genImage, ...get().generatedImages] })),
}));

export default useImagesStore;
