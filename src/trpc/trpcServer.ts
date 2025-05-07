import { appRouter } from "./routers";
import { createContext } from "./init";

export async function createTrpcServer() {
  const context = await createContext();
  return appRouter.createCaller(context);
}
