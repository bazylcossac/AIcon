import { describe, expect, it, afterAll, beforeAll, vi } from "vitest";
import openai from "@/lib/OpenAIClient";
// vi.mock("openai");

describe("OPENAI Text To Speech", () => {
  it("it generates speech from text", async () => {
    const mockData = {
      model: "gpt-4o-mini-tts",
      input: "this is test mock message",
      instructions: "",
      voice: "alloy",
      speed: 1.0,
      response_format: "mp3" as "mp3" | "wav",
    };

    (openai.audio.speech.create as ReturnType<typeof vi.fn>).mockResolvedValue({
      arrayBuffer: () => new TextEncoder().encode("mock-audio").buffer,
    });

    vi.mock("@/lib/OpenAIClient", () => {
      return {
        default: {
          audio: {
            speech: {
              create: vi.fn().mockResolvedValue({
                status: 200,
                arrayBuffer: () =>
                  Promise.resolve(
                    new TextEncoder().encode("mock-audio").buffer
                  ),
              }),
            },
          },
        },
      };
    });

    const response = await openai.audio.speech.create(mockData);
    const buffer = await response.arrayBuffer();
    expect(buffer).toBeInstanceOf(ArrayBuffer);
  });
});
