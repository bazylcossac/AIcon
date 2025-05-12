import { useState, useEffect } from "react";

function useMediaQuery() {
  const [matches, setMatches] = useState<boolean>();
  useEffect(() => {
    const matches = window.matchMedia("(min-width: 768px)");
    setMatches(matches.matches);
  }, []);

  return matches;
}

export default useMediaQuery;
