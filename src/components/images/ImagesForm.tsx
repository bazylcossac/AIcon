"use client";
import { ImageGenOpenAIRequest } from "@/actions/actions";
import useImagesStore from "@/store/ImagesStore/Images.bear";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useRef, useState, useTransition } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

import Loading from "../Loading";
import { cn } from "@/lib/utils";
import {
  hasUserTokens,
  useUserStoreWithEq,
} from "@/store/UserStore/User.selectors";

const ImagesForm = () => {
  const session = useSession();
  const [imagePrompt, setImagesPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isPending, startTransition] = useTransition();
  const canUserGenerate = useUserStoreWithEq(hasUserTokens);
  const addImageToStore = useImagesStore((state) => state.addToGeneratedImages);

  const handleImageGenSubmit = async () => {
    if (session.data?.user?.id) {
      const userId = session.data.user.id;
      setImagesPrompt("");
      startTransition(async () => {
        const imageData = await ImageGenOpenAIRequest(imagePrompt, userId, 1);
        addImageToStore(imageData);
      });
    } else {
      redirect("/");
    }
  };

  return (
    <div className="mt-auto fixed bottom-0 md:w-10/12 w-full">
      <div
        className={cn(
          "w-full md:w-6/12 h-34 mx-auto mt-auto mb-10 rounded-2xl bg-neutral-700 border-white/50 focus-within:border-white/30 focus-within:border-1 transition relative cursor-text",
          {
            "brightness-50 cursor-default": isPending || !canUserGenerate,
          }
        )}
        onClick={() => {
          if (textareaRef && typeof textareaRef !== "function") {
            textareaRef.current?.focus();
          }
        }}
      >
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            handleImageGenSubmit();
          }}
        >
          <textarea
            ref={textareaRef}
            className="p-4 rounded-2xl resize-none outline-none custom-scrollbar text-md  md:text-md w-11/12"
            placeholder={
              isPending
                ? "Generating..."
                : canUserGenerate
                ? "Describe what you want to see..."
                : "No tokens"
            }
            value={imagePrompt}
            disabled={isPending || !canUserGenerate}
            maxLength={120}
            required
            onChange={(e) => setImagesPrompt(e.target.value)}
          ></textarea>
          <div className="flex justify-between  p-2 px-3 absolute -bottom-12  w-full ">
            <div
              className={cn(
                "flex flex-row items-center gap-2 [&>*]:cursor-pointer [&>*]:hover:text-white text-white/50 [&>*]:hover:bg-white/30 transition",
                {
                  "[&>*]:hidden": !canUserGenerate,
                }
              )}
            >
              <button
                className="p-1.25 rounded-full transition"
                onClick={(e) => e.stopPropagation()}
                type="button"
                disabled={!canUserGenerate}
              >
                <VscSettings />
              </button>
              <button
                className="px-2 py-1 rounded-full transition"
                onClick={(e) => e.stopPropagation()}
                type="button"
                disabled={!canUserGenerate}
              >
                <p className="text-sm">1x</p>
              </button>
              <button
                className="p-1.25 rounded-full transition"
                onClick={(e) => e.stopPropagation()}
                type="button"
                disabled={!canUserGenerate}
              >
                <MdAttachFile />
              </button>
            </div>
            <button
              className={cn(
                "bg-green-700 text-xs p-2 md:p-3 text-md rounded-full hover:bg-green-800 transition cursor-pointer font-bold disabled:bg-neutral-600 disabled:cursor-not-allowed",
                {
                  "bg-neutral-600 hover:bg-neutral-600 cursor-not-allowed":
                    !canUserGenerate,
                }
              )}
              type="submit"
              disabled={isPending || !canUserGenerate}
            >
              {isPending ? (
                <Loading classNamesBig="w-6 h-6" classNamesSmall="h-4 w-4" />
              ) : (
                <FaArrowUp />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ImagesForm.displayName = "ImagesForm";

export default ImagesForm;
