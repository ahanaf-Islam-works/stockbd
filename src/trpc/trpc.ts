import { authOptions } from "@/lib/auth";
import { TRPCError, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const getUser = await getServerSession(authOptions);
  const user = getUser?.user;
  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to do this",
    });
  }

  return opts.next({
    ctx: {
      userId: user.id,
      user,
      hello: "world",
    },
  });
});

const isAdmin = middleware(async (opts) => {
  const session = await getServerSession();

  if (session?.user.role == false) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be an admin to do this",
    });
  }

  return opts.next({
    ctx: {
      userId: session?.user.id,
      user: session?.user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
export const adminProcedure = t.procedure.use(isAdmin);
