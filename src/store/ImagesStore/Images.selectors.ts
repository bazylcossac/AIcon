import useImagesStore, { ImagesStoreTypes } from "./Images.bear";

import { createWithEqFunction } from "../createWithEqFunctions";

export const getImages = (state: ImagesStoreTypes) => state.generatedImages;

export const useImagesStoreWithEq = createWithEqFunction(useImagesStore);
