// Updates the stock database with the latest stock data

import db from "@/db";
import { TRPCError } from "@trpc/server";
import getRealTimeStock from "@/utils/getStockDataRealtime";

const updateRealtimeStockDB = async () => {
  await db.realTimeStock.deleteMany();
  const stockData = await getRealTimeStock();
  for (let i = 0; i < stockData.length; i++) {
    const stock = await db.realTimeStock.create({
      data: {
        name: stockData[i].name,
        lastTradedPrice: stockData[i].lastTradedPrice,
        priceChange: stockData[i].priceChange,
        changeSymbol: stockData[i].changeSymbol,
        changePercentage: stockData[i].changePercentage,
      },
    });
  }

  const stock = await db.realTimeStock.findMany();
  return {
    message: "Stock database updated",
    stock,
  };
};

export { updateRealtimeStockDB };
