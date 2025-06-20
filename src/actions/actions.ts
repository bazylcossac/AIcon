"use server";

// usprawnic wysylanie
// opoznic wysyalnie do bazy danych dopiero po tym jak wyslemy blob/file/url na klienta

// zwiekszyc maksymalna wage image do uploadthing
// dodac next safe action

// refaktoryzacja forma z textarea zeby byl uniwersalny

import { InitialType } from "@/lib/types";
import { createTrpcServer } from "@/trpc/trpcServer";
import { utapi } from "@/lib/uploadThing/uploadthing";
import OpenAI from "openai";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/auth";
import { base64ToUInt } from "@/lib/functions/functions";

import { GeneratedImageType } from "@/store/storeTypes";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_SECRET_KEY });

export async function cleanupSession(sessionToken: string) {
  const session = await auth();
  const trpcServer = await createTrpcServer({ session });

  await trpcServer.auth.cleanupUserSession(sessionToken);
}

export async function TSSOpenAIRequest(
  settings: InitialType,
  userId: string | undefined
) {
  const session = await auth();
  if (!userId || !session?.sessionToken) {
    throw new Error("Unauthorized");
  }
  const trpcServer = await createTrpcServer({ session });
  const speechFileName = `speech_${crypto.randomUUID()}.mp3`;
  const { model, instructions, voice, responseFormat, message } = settings;
  trpcServer.user.removeUserTokenAmount(1);
  const response = await openai.audio.speech.create({
    model,
    input: message,
    instructions,
    voice,
    response_format: responseFormat,
  });

  const buffer = await response.arrayBuffer();

  try {
    const file = new File([buffer], speechFileName, {
      type: `audio/${responseFormat}`,
    });

    // uploads to uploadThing
    const uploaded = await utapi.uploadFiles([file]);
    if (!uploaded) {
      throw new Error("Failed to Upload");
    }
    const url = uploaded[0]!.data!.ufsUrl;

    // uploads to db
    await trpcServer.files.uploadFile({
      authorId: userId,
      url,
      type: `audio/${responseFormat}`,
      prompt: message,
      quality: "medium",
      size: "",
    });
    return { url, buffer, responseFormat };
  } catch (error) {
    throw new UploadThingError(`File Upload Error | ${error}`);
  }
}

export async function ImageGenOpenAIRequest(
  prompt: string,
  userId: string,
  n: number
) {
  const session = await auth();
  if (!userId || !session?.sessionToken) {
    throw new Error("Unauthorized");
  }

  const trpcServer = await createTrpcServer({ session });

  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
      n,
    });

    if (!response.data) {
      throw new Error(`Error | Failed to generate image`);
    }

    const image_base64 = response.data[0].b64_json;
    if (!image_base64) {
      throw new Error("Failed to generate image");
    }
    const uintArr = base64ToUInt(image_base64);

    const fileName = `image-${crypto.randomUUID()}.png`;

    const file = new File([uintArr], fileName, { type: "image/png" });

    const uploaded = await utapi.uploadFiles([file]);

    if (!uploaded) {
      throw new Error("Failed to Upload");
    }
    const url = uploaded[0]!.data!.ufsUrl;

    // uploads to db
    await trpcServer.files.uploadFile({
      authorId: userId,
      url,
      type: `image/png`,
      prompt,
      quality: "medium",
      size: "1024x1024",
    });

    return {
      url,
      prompt,
      quality: "medium",
      size: "1024x1024",
      id: crypto.randomUUID(),
    } as GeneratedImageType;
  } catch (err) {
    const error = err as Error;
    throw new Error(`Error while generating image | ${error.message}`);
  }
  // await sleep(2000);
  // const result: GeneratedImageType = {
  //   url: "https://cx7sgeelsh.ufs.sh/f/sY6aElwL8UT7veLs8EbeEbsynaDp0ziuM6wYZgdhCrRJ4x3o",
  //   prompt,
  //   quality: "medium",
  //   size: "1024x1024",
  //   id: crypto.randomUUID(),
  // };
  return result;
}
