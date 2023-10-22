"use client";
import React from "react";
import { trpc } from "@/app/_trpc/client";
import { Callout } from "@tremor/react";
import { Loader2 } from "lucide-react";
import { AppRouter } from "@/trpc";
import { buttonVariants } from "../ui/button";

interface StockDatabaseUpdateProps {
  title: string;
  queryKey: "updateStockDatabase";
}

const useCustomStockQuery = (queryKey: keyof typeof trpc & string) => {
  return trpc[queryKey].useQuery(undefined, { enabled: false });
};

const StockDatabaseUpdate: React.FC<StockDatabaseUpdateProps> = ({
  title,
  queryKey,
}) => {
  const {
    data: dbResponse,
    refetch,
    isFetching,
    error,
    status,
  } = useCustomStockQuery(queryKey);

  const ok = async () => {
    await refetch();
  };

  return (
    <div>
      <h4>{title}</h4>
      <button
        className={buttonVariants({
          size: "lg",
          className: "mt-4 mb-4",
        })}
        onClick={ok}
      >
        Update Stock Database
      </button>
      {isFetching && (
        <div className="flex justify-start">
          <Loader2 className="animate-spin" />
        </div>
      )}
      {status === "success" && (
        <Callout title="" color="green" className="mt-4">
          {dbResponse.stock.length} stocks updated
        </Callout>
      )}
      {status === "error" && (
        <Callout title="" color="rose" className="text-base mt-4">
          {error.message}
        </Callout>
      )}
    </div>
  );
};

export default StockDatabaseUpdate;
