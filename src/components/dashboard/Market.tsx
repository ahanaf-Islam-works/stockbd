"use client";
import { buttonVariants } from "../ui/button";
import StockSlider from "./StockSlider";
import { trpc } from "@/app/_trpc/client";

export default function Market() {
  const { data: stocks } = trpc.getStockDataRealtime.useQuery();

  if (!stocks) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <StockSlider stocks={stocks} />
      <button
        className={buttonVariants({
          size: "lg",
          className: "mt-2 mb-4",
        })}
      >
        Update
      </button>
    </div>
  );
}
