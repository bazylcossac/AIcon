import { create } from "zustand";
import { GeneratedImageType } from "../storeTypes";

export type InitiaValuesTypes = {
  generatedImages: GeneratedImageType[];
};

type StoreActions = {
  addToGeneratedImages: (genImage: GeneratedImageType) => void;
};

type ImagesStoreTypes = InitiaValuesTypes & StoreActions;

const useImagesStore = create<ImagesStoreTypes>((set, get) => ({
  generatedImages: [] as GeneratedImageType[],
  addToGeneratedImages: (genImage: GeneratedImageType) =>
    set(() => ({ generatedImages: [...get().generatedImages, genImage] })),
}));

export default useImagesStore;
