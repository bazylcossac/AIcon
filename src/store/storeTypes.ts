export type GeneratedImageType = {
  id: string;
  url: string;
  prompt: string;
  quality: "high" | "medium" | "low";
  size: string;
  authorid?: string;
  createdAt?: Date;
  type?: string;
};
