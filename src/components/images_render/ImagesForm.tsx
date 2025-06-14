import React, { Dispatch, SetStateAction, forwardRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

type ImagesFormProps = {
  handleImageGenSubmit: () => void;
  imagePrompt: string;
  setImagesPrompt: Dispatch<SetStateAction<string>>;
};

const ImagesForm = forwardRef<HTMLTextAreaElement, ImagesFormProps>(
  (props, ref) => {
    const { handleImageGenSubmit, imagePrompt, setImagesPrompt } = props;
    return (
      <>
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "></div>
        <div
          className="w-11/12 md:w-6/12  h-34 mx-auto mt-auto mb-28 rounded-2xl bg-neutral-700 border-white/50 focus-within:border-white/30 focus-within:border-1 transition relative cursor-text"
          onClick={() => {
            if (ref && typeof ref !== "function") {
              ref.current?.focus();
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
              ref={ref}
              className="p-4 rounded-2xl resize-none outline-none custom-scrollbar text-md  md:text-md w-11/12 "
              placeholder="Describe what you want to see..."
              value={imagePrompt}
              maxLength={30}
              onChange={(e) => setImagesPrompt(e.target.value)}
            ></textarea>
            <div className="flex justify-between  p-2 px-3 absolute -bottom-12  w-full ">
              <div className="flex flex-row items-center gap-2 [&>*]:cursor-pointer [&>*]:hover:text-white text-white/50 [&>*]:hover:bg-white/30 transition">
                <button
                  className="p-1.25 rounded-full transition"
                  onClick={(e) => e.stopPropagation()}
                  type="button"
                >
                  <VscSettings />
                </button>
                <button
                  className="px-2 py-1 rounded-full transition"
                  onClick={(e) => e.stopPropagation()}
                  type="button"
                >
                  <p className="text-sm">1x</p>
                </button>
                <button
                  className="p-1.25 rounded-full transition"
                  onClick={(e) => e.stopPropagation()}
                  type="button"
                >
                  <MdAttachFile />
                </button>
              </div>
              <button
                className="bg-green-700 text-xs p-2 md:p-3 text-md rounded-full hover:bg-green-800 transition cursor-pointer font-bold"
                type="submit"
              >
                <FaArrowUp />
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
);
ImagesForm.displayName = "ImagesForm";

export default ImagesForm;
