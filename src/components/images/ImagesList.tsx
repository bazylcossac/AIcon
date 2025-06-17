"use client";
import React, { memo, useEffect, useMemo, useState } from "react";
import {
  getImages,
  useImagesStoreWithEq,
} from "../../store/ImagesStore/Images.selectors";
import Image from "next/image";
import { GeneratedImageType } from "@/store/storeTypes";
function ImagesList({ images }: { images: GeneratedImageType[] }) {
  const data = useImagesStoreWithEq(getImages);
  const [allImages, setAllImages] = useState(images);

  // TODO: kiedy user wroci na strone sa podwojne obrazki przez to ze dane sa z  state i servera
  const imagesData = useMemo(() => {
    if (data.length) {
      return [...data, ...images];
    } else {
      return images;
    }
  }, [data, images]);
  useEffect(() => {
    if (data) {
      setAllImages(data);
    }
  }, [data]);

  return (
    <>
      {imagesData.map((image) => (
        <Image
          src={image.url}
          width={350}
          height={350}
          alt="image"
          key={image.id}
          className="cursor-pointer hover:brightness-80 transition rounded-md"
        />
      ))}
    </>
  );
}
export default memo(ImagesList);
