import { User } from "next-auth";
import db from "../../db";

export const getPersonalStocks = async (userId: string) => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      stocks: true,
    },
  });
  if (!user) throw new Error("Stocks not found");
  return user.stocks;
};
