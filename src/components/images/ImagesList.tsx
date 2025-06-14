import React, { memo } from "react";
import { shallow } from "zustand/shallow";
import {
  getImages,
  useImagesShallowStore,
} from "../../store/ImagesStore/Images.selectors";
import useImagesStore from "@/store/ImagesStore/Images.bear";
import { GeneratedImageType } from "@/store/storeTypes";

function ImagesList() {
  const images = useImagesShallowStore(getImages);
  console.log(images);

  return <div>ImagesList</div>;
}
export default memo(ImagesList);
