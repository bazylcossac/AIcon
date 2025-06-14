"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { GrStorage } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import useImagesStore from "@/store/ImagesStore/Images.bear";
import { addImageToStore } from "@/store/ImagesStore/Images.selectors";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ImageGenOpenAIRequest } from "@/actions/actions";
import ImagesForm from "@/components/images/ImagesForm";
import ImagesList from "@/components/images/ImagesList";

function ImagesPage() {
  const session = useSession();
  const [imagePrompt, setImagesPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const addImageToStore = useImagesStore((state) => state.addToGeneratedImages);
  const handleImageGenSubmit = async () => {
    if (session.data?.user?.id) {
      const prompt = imagePrompt;
      const userId = session.data.user.id;
      setImagesPrompt("");
      const imageData = await ImageGenOpenAIRequest(prompt, userId, 1);
      addImageToStore(imageData);
    } else {
      redirect("/");
    }
  };

  return (
    <div className=" w-full h-full">
      <div className="w-full h-full">
        <div className="flex items-center justify-between py-4 border-b-1 border-black px-4 text-white/70">
          <p className="text-lg font-bold">Images</p>
          <div className="flex flex-row items-center gap-4 [&>*]:text-white/70 [&>*]:hover:text-white [&>*]:cursor-pointer transition">
            <div className="flex flex-row items-center gap-1 ">
              <MdOutlineCleaningServices className="text-sm" />
              <p className="text-xs">Clean</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <GrStorage className="text-sm" />
              <Link href="/dashboard/storage" className="text-xs ">
                Storage
              </Link>
            </div>
          </div>
        </div>
        <div className=" h-full overflow-y-auto flex flex-col">
          <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "></div>
          <ImagesList />
          <ImagesForm
            handleImageGenSubmit={handleImageGenSubmit}
            setImagesPrompt={setImagesPrompt}
            imagePrompt={imagePrompt}
            ref={textareaRef}
          />
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
