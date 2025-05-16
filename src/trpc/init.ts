import { initTRPC, TRPCError } from "@trpc/server";
import { auth } from "@/auth";

export default async function createContext() {
  const session = await auth();

  return {
    session,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(function isAuthed(opts) {
  if (!opts.ctx.session?.sessionToken) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return opts.next({
    ctx: {
      session: opts.ctx.session,
    },
  });
});
