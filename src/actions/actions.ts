"use server";

import { InitialType } from "@/lib/types";
import { createTrpcServer } from "@/trpc/trpcServer";
import { utapi } from "@/lib/uploadThing/uploadthing";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/auth";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_SECRET_KEY });

export async function cleanupSession(sessionToken: string) {
  const trpcServer = await createTrpcServer();
  await trpcServer.cleanupUserSession(sessionToken);
}

export async function TSSOpenAIRequest(settings: InitialType) {
  const session = await auth();
  const speechFileName = `speech_${crypto.randomUUID()}.mp3`;
  const { model, instructions, voice, speed, responseFormat, message } =
    settings;

  const response = await openai.audio.speech.create({
    model,
    input: message,
    instructions,
    voice,
    speed: speed[0],
    response_format: responseFormat,
  });

  const buffer = await response.arrayBuffer();

  try {
    const blob = new Blob([buffer], { type: `audio/${responseFormat}` });

    const file = new File([blob], speechFileName, {
      type: `audio/${responseFormat}`,
    });

    const uploaded = await utapi.uploadFiles([file]);
    const url = uploaded[0].data?.ufsUrl;
    console.log(url);

    /// add file url to db
  } catch (error) {
    throw new UploadThingError(`File Upload Error | ${error}`);

    //   } finally {
    //     fs.unlink(speechFile, (err) => {
    //       if (err) {
    //         console.error("Error deleting local file:", err);
    //       } else {
    //         console.log("Local file deleted successfully");
    //       }
    //     });
  }
}
