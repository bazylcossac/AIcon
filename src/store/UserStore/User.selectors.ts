import useUserStore from "./User.bear";
import { UserStoreTypes } from "./User.bear";
import { createWithEqFunction } from "../StoreFunctions/createWithEqFunctions";

export const getUserTokens = (state: UserStoreTypes) => state.tokens;
export const hasUserTokens = (state: UserStoreTypes) => !!state.tokens;
export const useUserStoreWithEq = createWithEqFunction(useUserStore);
