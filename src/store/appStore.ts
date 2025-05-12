import { create } from "zustand";

type appStoreT = {
  showSearchBarDialog: boolean;
  setShowSearchBarDialog: (value: boolean) => void;
};

export const useAppStore = create<appStoreT>((set, get) => ({
  showSearchBarDialog: false,
  setShowSearchBarDialog: (value: boolean) =>
    set(() => ({ showSearchBarDialog: value })),
}));
