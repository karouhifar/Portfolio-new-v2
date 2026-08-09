// hooks/useMediaQuery.ts
"use client";

import { useEffect, useState } from "react";

/**
 * Returns `undefined` until the query has been evaluated in the browser.
 * Server and first client render therefore agree (no hydration mismatch), and
 * callers can choose to render nothing rather than committing to the wrong
 * branch and swapping a heavy component in a moment later.
 */
export function useMediaQuery(query: string): boolean | undefined {
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    // set initial
    setMatches(mql.matches);

    // subscribe
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [query]);

  return matches;
}
