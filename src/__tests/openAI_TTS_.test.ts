import { describe, expect, it, afterAll, beforeAll, vi } from "vitest";
import openai from "@/lib/OpenAIClient";

describe("OPENAI Text To Speech", () => {
  const mockData = {
    model: "gpt-4o-mini-tts",
    input: "this is test mock message",
    instructions: "",
    voice: "alloy",
    speed: 1.0,
    response_format: "mp3" as "mp3" | "wav",
  };

  vi.mock("@/lib/OpenAIClient", () => {
    return {
      default: {
        audio: {
          speech: {
            create: vi.fn().mockResolvedValue({
              status: 200,
              arrayBuffer: () =>
                Promise.resolve(new TextEncoder().encode("mock-audio").buffer),
            }),
          },
        },
      },
    };
  });

  it("it returns array buffer as a response", async () => {
    const response = await openai.audio.speech.create(mockData);
    const buffer = await response.arrayBuffer();
    expect(buffer).toBeInstanceOf(ArrayBuffer);
  });

  it("it returns status 200", async () => {
    const response = await openai.audio.speech.create(mockData);
    expect(response.status).toBe(200);
  });
});
