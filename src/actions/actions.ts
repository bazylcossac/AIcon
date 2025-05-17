"use server";

import { InitialType } from "@/lib/types";
import { createTrpcServer } from "@/trpc/trpcServer";
import { utapi } from "@/lib/uploadThing/uploadthing";
import OpenAI from "openai";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/auth";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_SECRET_KEY });

export async function cleanupSession(sessionToken: string) {
  const session = await auth();
  const trpcServer = await createTrpcServer({ session });
  await trpcServer.cleanupUserSession(sessionToken);
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

  const response = await openai.audio.speech.create({
    model,
    input: message,
    instructions,
    voice,
    response_format: responseFormat,
  });

  const buffer = await response.arrayBuffer();

  try {
    const blob = new Blob([buffer], { type: `audio/${responseFormat}` });

    const file = new File([blob], speechFileName, {
      type: `audio/${responseFormat}`,
    });
    // uploads to uploadThing
    const uploaded = await utapi.uploadFiles([file]);
    if (!uploaded) {
      throw new Error("Failed to Upload");
    }
    const url = uploaded[0]!.data!.ufsUrl;

    // uploads to db
    await trpcServer.uploadFile({
      authorId: userId,
      url,
      type: `audio/${responseFormat}`,
    });
    return url;
  } catch (error) {
    throw new UploadThingError(`File Upload Error | ${error}`);
  }
}

export async function ImageGenOpenAIRequest(prompt: string, userId: string) {}
