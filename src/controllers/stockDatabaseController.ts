// Updates the stock database with the latest stock data

import db from "@/db";
import { TRPCError } from "@trpc/server";

const updatedStockDatabase = async () => {
  const latestStockData = await db.realTimeStock.findMany({});
  if (!latestStockData) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Could not find latest stock data",
    });
  }
  return latestStockData;
};

export { updatedStockDatabase };
