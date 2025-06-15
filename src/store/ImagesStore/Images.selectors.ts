import useImagesStore, { ImagesStoreTypes } from "./Images.bear";

import { createWithEqFunction } from "../StoreFunctions/createWithEqFunctions";

export const getImages = (state: ImagesStoreTypes) => state.generatedImages;

export const useImagesStoreWithEq = createWithEqFunction(useImagesStore);
