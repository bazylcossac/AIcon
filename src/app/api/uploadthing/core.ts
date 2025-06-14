import { auth } from "@/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  imageUploader: f({
    image: { maxFileSize: "2MB", maxFileCount: 1, minFileCount: 1 },
  })
    .middleware(async ({ req, rest }) => {
      const session = await auth();
      if (!session) throw new UploadThingError("You must be logged in");

      return { userId: session.user?.id };
    })
    .onUploadComplete((data) => console.log(data)),
} satisfies FileRouter;

export type UploadRouter = typeof fileRouter;
