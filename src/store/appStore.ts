import { create } from "zustand";

type appStoreTypes = {
  showSearchBarDialog: boolean;
  setShowSearchBarDialog: (value: boolean) => void;
};

export const useAppStore = create<appStoreTypes>((set) => ({
  showSearchBarDialog: false,
  setShowSearchBarDialog: (value: boolean) =>
    set(() => ({ showSearchBarDialog: value })),
}));
