import { shallow } from "zustand/shallow";

import { InitiaValuesTypes } from "./Images.bear";
export const getImages = (state: InitiaValuesTypes) => (
  state.generatedImages, shallow
);
