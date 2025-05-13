import { UploadRouter } from "@/app/api/uploadthing/core";
import { genUploader } from "uploadthing/client";

export const { uploadFiles } = genUploader<UploadRouter>();
