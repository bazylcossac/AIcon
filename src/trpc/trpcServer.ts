import { Session } from "next-auth";
import createContext from "./init";
import { appRouter } from "./routers";

export async function createTrpcServer(context: { session: Session | null }) {
  return appRouter.createCaller(context);
}
