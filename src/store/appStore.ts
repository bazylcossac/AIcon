import { create } from "zustand";

type appStoreTypes = {
  showSearchBarDialog: boolean;
  showProjectMenu: boolean;
setShowSearchBarDialog: (value: boolean) => void;
  setShowProjectMenu: (value: boolean) => void;
};

export const useAppStore = create<appStoreTypes>((set) => ({
  showSearchBarDialog: false,
  showProjectMenu: false,
  setShowSearchBarDialog: (value: boolean) =>
    set(() => ({ showSearchBarDialog: value })),
  setShowProjectMenu: (value: boolean) =>
    set(() => ({ showProjectMenu: value })),
}));
