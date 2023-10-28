import StockSlider from "./StockSlider";
import { serverClient } from "@/trpc/serverClient";
import { Loader2 } from "lucide-react";

export default async function Market() {
  const stocks = await serverClient.user.getStockDataRealtime();

  if (!stocks) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-gray-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <StockSlider stocks={stocks} />
    </div>
  );
}
