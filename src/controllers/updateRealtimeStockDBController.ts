// Assuming you have already declared the interface RealTimeStockProps

import db from "@/db";
import { TRPCError } from "@trpc/server";
const updateRealtimeStockDB = async () => {
  try {
    // Fetch data from Alpha Vantage API
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
    );
    const stockData = await response.json();
    if (!stockData) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });

    // Clear the existing data
    if (response) {
      await db.realTimeStock.deleteMany();
    }

    // Combine top gainers and top losers data
    const stockList = [...stockData.top_gainers, ...stockData.top_losers];

    // Loop through stockList and update the database
    for (let i = 0; i < stockList.length; i++) {
      await db.realTimeStock.create({
        data: {
          name: stockList[i].ticker,
          lastTradedPrice: stockList[i].price,
          priceChange: stockList[i].change_amount,
          changeSymbol: stockData.top_gainers.find(
            (stock: { ticker: any }) => stock.ticker === stockList[i].ticker
          )
            ? "up"
            : stockData.top_losers.find(
                (stock: { ticker: any }) => stock.ticker === stockList[i].ticker
              )
            ? "down"
            : "neutral",
          changePercentage: stockList[i].change_percentage,
        },
      });
    }

    // Fetch the updated data
    const updatedStock = await db.realTimeStock.findMany();

    return {
      message: "Stock database updated",
      stock: updatedStock,
    };
  } catch (error) {
    console.error("Error updating stock database:", error);
    throw new Error("Failed to update stock database");
  }
};

export default updateRealtimeStockDB;
