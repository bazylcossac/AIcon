import { create } from "zustand";

type InitialValuesTypes = {
  tokens: number;
};

type StoreActions = {
  addUserAmountTokens: (amount: number) => void;
  removeUserAmountTokens: (amount: number) => void;
};

type UserStoreTypes = InitialValuesTypes & StoreActions;

const InitialValues: InitialValuesTypes = {
  tokens: 0,
};

const useUserStore = create<UserStoreTypes>((set, get) => ({
  ...InitialValues,
  addUserAmountTokens: (amount) => set({ tokens: get().tokens + amount }),
  removeUserAmountTokens: (amount) => set({ tokens: get().tokens - amount }),
}));

export default useUserStore;
