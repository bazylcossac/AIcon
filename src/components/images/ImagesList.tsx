import React, { memo } from "react";
import {
  getImages,
  useImagesShallowStore,
  useImagesStoreWithEq,
} from "../../store/ImagesStore/Images.selectors";

function ImagesList() {
  const images = useImagesStoreWithEq(getImages);
  console.log(images);

  return <div>ImagesList</div>;
}
export default memo(ImagesList);
