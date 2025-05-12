"use client";
import React, { useEffect, useState } from "react";

function useShortcutOpenInput(callback: () => void) {
  const system = navigator.userAgent.toLocaleLowerCase();
  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      const systemKey = system.includes("mac") ? e.metaKey : e.ctrlKey;

      if (systemKey && e.key === "k") {
        console.log("WCISNIETE");
        callback();
      }
    };

    window.addEventListener("keydown", keyDown);

    return () => window.removeEventListener("keydown", keyDown);
  }, [system, callback]);
}

export default useShortcutOpenInput;
