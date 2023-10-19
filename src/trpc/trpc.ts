import { TRPCError, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
import db from "@/db";

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async ({ ctx }: { ctx: any }) => {
  const session = await getServerSession();

  if (!session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return ctx.next({
    ctx: {
      session,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
