import StockSlider from "./StockSlider";
import { Loader2 } from "lucide-react";
import { RealTimeStockProps } from "@/props/realTimeStockProps";

export default async function Market({
  stocks,
}: {
  stocks: RealTimeStockProps[];
}) {
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
