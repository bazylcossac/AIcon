import { create } from "zustand";

export type InitialValuesTypes = {
  tokens: number;
};

export type StoreActions = {
  addUserAmountTokens: (amount: number) => void;
  removeUserAmountTokens: (amount: number) => void;
  setUserTokens: (amount: number) => void;
};

export type UserStoreTypes = InitialValuesTypes & StoreActions;

const InitialValues: InitialValuesTypes = {
  tokens: 0,
};

const useUserStore = create<UserStoreTypes>((set, get) => ({
  ...InitialValues,
  addUserAmountTokens: (amount) => set({ tokens: get().tokens + amount }),
  removeUserAmountTokens: (amount) => set({ tokens: get().tokens - amount }),
  setUserTokens: (amount) => set({ tokens: +amount }),
}));

export default useUserStore;
