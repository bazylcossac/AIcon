import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { TestIntialType } from "../types";

export default function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => ({
      sport: searchParams.get("sport") || "",
      name: searchParams.get("name") || "",
      odds: searchParams.get("odds") || "",
    }),
    [searchParams]
  );

  const setFilters = useCallback(
    (newFilters: TestIntialType) => {
      const currentParams = new URLSearchParams(searchParams.toString());

      Object.entries(newFilters).map(([key, value]) => {
        if (value) {
          currentParams.set(key, value.toString());
        } else {
          currentParams.delete(key);
        }
      });
      const search = currentParams.toString();
      const query = search ? `?${search}` : "";
      const url = `${window.location.pathname}${query}`;

      router.replace(url, { scroll: false });
    },

    [searchParams, router]
  );

  return { filters, setFilters };
}
