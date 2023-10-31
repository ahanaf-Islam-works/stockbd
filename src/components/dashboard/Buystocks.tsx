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
import BuyStockButton from "./BuyStockButton";

interface BuyStockProps {
  stock: RealTimeStockProps;
  children?: React.ReactNode;
}

const Buystocks = ({ stock, children }: BuyStockProps) => {
  const { name, lastTradedPrice, priceChange, changeSymbol, changePercentage } =
    stock;

  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="text-center m-auto">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>

          <span className="text-xs font-semibold text-zinc-700">
            {lastTradedPrice}
          </span>
          <span className="text-sm font-semibold text-zinc-700">
            {priceChange}
          </span>
          {changeSymbol === "up" ? (
            <span className="text-sm font-semibold p-1 w-full text-white rounded bg-emerald-400">
              {changePercentage}
            </span>
          ) : changeSymbol === "down" ? (
            <span className="text-sm font-semibold p-1 w-full text-white rounded bg-rose-400">
              {changePercentage}
            </span>
          ) : changeSymbol === "neutral" ? (
            <span className="text-sm font-semibold p-1 w-full text-white rounded bg-indigo-400">
              {changePercentage}
            </span>
          ) : null}
        </DialogHeader>
        <DialogDescription className="flex flex-col">
          <Link
            target="_blank"
            href={"/stock/" + name}
            className="text-xs font-semibold text-zinc-600 bg-slate-100 p-4 rounded hover:shadow-lg text-center cursor-pointer"
          >
            {name}'s previous performance
          </Link>

          <BuyStockButton stockSymbol={name.toString()} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Buystocks;
