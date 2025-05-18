import { describe, it, expect, vi } from "vitest";
import openai from "@/lib/OpenAIClient";
import { base64ToUInt } from "../lib/functions/functions";

describe("OPENAI Image Generator", () => {
  const mockParams = {
    model: "gpt-image-1",
    prompt: "mock-prompt",
    size: "1024x1024" as const,
    n: 1,
  };

  vi.mock("@/lib/OpenAIClient", () => {
    return {
      default: {
        images: {
          generate: vi.fn().mockResolvedValue({
            data: [
              {
                b64_json: "MockB64Json",
              },
            ],
          }),
        },
      },
    };
  });

  it("it should  return a b64 json", async () => {
    const response = await openai.images.generate(mockParams);
    if (!response.data) return;
    const b64Json = response.data[0].b64_json;
    expect(b64Json).toBeTypeOf("string");
  });

  it("it should generate decode b64 json to UInt8Array and create a File", async () => {
    const response = await openai.images.generate(mockParams);
    if (!response.data) return;
    const b64Json = response.data[0].b64_json;
    if (!b64Json) return;
    const uintArr = base64ToUInt(b64Json);
    const file = new File([uintArr], "mock-test-file-name", {
      type: "image/png",
    });

    expect(uintArr).toBeInstanceOf(Uint8Array);
    expect(file).toBeInstanceOf(File);
  });
});
