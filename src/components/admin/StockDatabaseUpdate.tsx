"use client";
import React from "react";
import { trpc } from "@/app/_trpc/client";
import { Callout } from "@tremor/react";
import { Loader2 } from "lucide-react";
import type { AppRouter } from "@/trpc";

import { ExclamationIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { buttonVariants } from "../ui/button";

interface StockDatabaseUpdateProps {
  title: string;
  queryKey: keyof AppRouter & string;
  description?: string;
}

const useCustomStockQuery = (queryKey: keyof typeof trpc & string) => {
  return trpc[queryKey].useQuery(undefined, { enabled: false });
};

const StockDatabaseUpdate: React.FC<StockDatabaseUpdateProps> = ({
  title,
  queryKey,
  description,
}) => {
  const {
    data: dbResponse,
    refetch,
    isFetching,
    error,
    status,
  } = useCustomStockQuery(queryKey as keyof typeof trpc & string);

  const ok = async () => {
    await refetch();
    console.log("hello");
  };

  return (
    <div>
      <h5 className="text-2xl text-center">{title}</h5>
      <p className="text-zinc-600 text-xs text-center">{description}</p>
      <button
        className={buttonVariants({
          size: "lg",
          className: "mt-4 mb-4 w-full",
        })}
        onClick={ok}
      >
        Update
      </button>
      <div>
        {isFetching && (
          <div className="flex justify-start">
            <Loader2 className="animate-spin" />
          </div>
        )}
        {status === "success" && (
          <Callout
            title=""
            icon={CheckCircleIcon}
            color="green"
            className="mt-4"
          >
            {dbResponse?.stock?.length} stocks updated
          </Callout>
        )}
        {status === "error" && (
          <Callout
            title=""
            icon={ExclamationIcon}
            color="rose"
            className="text-base mt-4"
          >
            {error.message}
          </Callout>
        )}
      </div>
    </div>
  );
};

export default StockDatabaseUpdate;
