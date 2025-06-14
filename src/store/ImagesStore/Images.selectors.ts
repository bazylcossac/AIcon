import { useShallow } from "zustand/react/shallow";
import useImagesStore, { InitiaValuesTypes, StoreActions } from "./Images.bear";
import { GeneratedImageType } from "../storeTypes";

export const getImages = (state: InitiaValuesTypes) => state.generatedImages;

export const useImagesShallowStore = <T>(
  selector: ReturnType<typeof useImagesStore.getState>
): T => {
  return useImagesStore(useShallow(selector));
};
