"use client";
import React, { memo, useRef, useState } from "react";
import {
  getImages,
  useImagesStoreWithEq,
} from "../../store/ImagesStore/Images.selectors";
import Image from "next/image";
import { ImagesDB } from "@/lib/types";
import { GeneratedImageType } from "@/store/storeTypes";

const render = 0;

function ImagesList({ images }: { images: ImagesDB }) {
  const [allImages, setAllImages] =
    useState<(ImagesDB | GeneratedImageType)[]>(images);
  const data = useImagesStoreWithEq(getImages);

  return (
    <>
      {allImages.map((image) => (
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
