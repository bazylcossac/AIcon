"use client";
import { useState, useEffect } from "react";

function useMediaQuery() {
  const [matches, setMatches] = useState<boolean>();
  useEffect(() => {
    function checkMedia() {
      const matches = window.matchMedia("(min-width: 768px)");
      setMatches(matches.matches);
    }
    checkMedia();
    window.addEventListener("resize", checkMedia);

    return () => {
      window.removeEventListener("resize", checkMedia);
    };
  }, []);

  return matches;
}

export default useMediaQuery;
