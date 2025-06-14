"use client";
import React, { memo } from "react";
import {
  getImages,
  useImagesStoreWithEq,
} from "../../store/ImagesStore/Images.selectors";
import Image from "next/image";

function ImagesList() {
  const images = useImagesStoreWithEq(getImages);

  return (
    <div>
      {images.map((image) => (
        <Image
          src={image.url}
          width={100}
          height={100}
          alt="image"
          key={image.id}
        />
      ))}
    </div>
  );
}
export default memo(ImagesList);
