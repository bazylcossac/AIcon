import TestSearchParams from "@/components/testSearchParams";
import TextToSpeechSettings from "@/components/text_to_speech/TTSSettings";
import React from "react";

async function test({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <TextToSpeechSettings />

      <TestSearchParams searchParams={searchParams} />
    </div>
  );
}

export default test;
