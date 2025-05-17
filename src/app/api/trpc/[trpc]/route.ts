import createContext from "@/trpc/init";
import { appRouter } from "@/trpc/routers";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = async (req: Request) => {
  const context = await createContext();
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => context,
  });
};

export { handler as GET, handler as POST };
