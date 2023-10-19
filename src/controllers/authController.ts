import { getServerSession } from "next-auth/next";
import { TRPCError } from "@trpc/server";
import db from "@/db";

export const authController = async () => {
  const session = await getServerSession();

  if (!session?.user?.email || !session?.user?.name) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to do this",
    });
  }

  const dbuser = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!dbuser) {
    await db.user.create({
      data: {
        password: "From Email",
        email: session.user.email,
        name: session.user.name,
      },
    });
  }

  return { success: true };
};
