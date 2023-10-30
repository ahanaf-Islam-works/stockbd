// Buystocks.js

"use client";
import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import RealTimeStockProps from "@/types/realTimeStockProps";

interface BuyStockProps {
  stock: RealTimeStockProps; // Change from an array to a single stock
  children?: React.ReactNode;
}

const Buystocks = ({ stock, children }: BuyStockProps) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{stock.name}</DialogTitle>
          <div className="mb-16">
            <p className="text-xs font-semibold text-zinc-700">
              {stock.lastTradedPrice}
            </p>
            <p className="text-sm font-semibold text-zinc-700">
              {stock.priceChange}
            </p>
            {stock.changeSymbol === "up" ? (
              <p className="text-sm font-semibold p-1 w-full text-white rounded bg-emerald-400">
                {stock.changePercentage}
              </p>
            ) : stock.changeSymbol === "down" ? (
              <p className="text-sm font-semibold p-1 w-full text-white rounded bg-rose-400">
                {stock.changePercentage}
              </p>
            ) : stock.changeSymbol === "neutral" ? (
              <p className="text-sm font-semibold p-1 w-full text-white rounded bg-indigo-400">
                {stock.changePercentage}
              </p>
            ) : null}
          </div>
        </DialogHeader>
        <DialogDescription>
          <Link
            href={"/stock/" + stock.name}
            className="text-xs font-semibold text-zinc-100 bg-slate-800 p-4 rounded hover:shadow-lg text-center cursor-pointer mt-4"
          >
            learn about {stock.name}'s previous performance
          </Link>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Buystocks;
