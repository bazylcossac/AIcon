import type { StoreApi } from "zustand";
import { shallow } from "zustand/shallow";
import { useStoreWithEqualityFn } from "zustand/traditional";

export const createWithEqFunction =
  <S>(store: StoreApi<S>) =>
  <T>(callback: (state: S) => T) =>
    useStoreWithEqualityFn(store, callback, shallow);
