"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function TTSGenerateBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-green-700 p-2 rounded-md hover:bg-green-800 transition cursor-pointer"
      type="submit"
      disabled={pending}
    >
      {pending ? "Generating..." : "Generate"}
    </button>
  );
}

export default TTSGenerateBtn;
