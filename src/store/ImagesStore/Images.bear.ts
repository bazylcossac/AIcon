import { create } from "zustand";
import { GeneratedImageType } from "../storeTypes";

export type InitiaValuesTypes = {
  generatedImages: GeneratedImageType[];
};

export type StoreActions = {
  addToGeneratedImages: (genImage: GeneratedImageType) => void;
};

export type ImagesStoreTypes = InitiaValuesTypes & StoreActions;

const InitialValues: InitiaValuesTypes = {
  generatedImages: [] as GeneratedImageType[],
};

const useImagesStore = create<ImagesStoreTypes>((set, get) => ({
  ...InitialValues,
  addToGeneratedImages: (genImage: GeneratedImageType) =>
    set(() => ({ generatedImages: [genImage, ...get().generatedImages] })),
}));

export default useImagesStore;
