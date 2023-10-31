"use client";
import { trpc } from "@/app/_trpc/client";
import { buttonVariants } from "../ui/button";
import { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

interface BuyStockButtonProps {
  stockSymbol: string;
}

const BuyStockButton: FC<BuyStockButtonProps> = ({ stockSymbol }) => {
  const [shares, setShares] = useState<number>(0);
  const { toast } = useToast();
  const userId = useSession();
  const id = userId.data?.user.id;
  const {
    data: result,
    error,
    isSuccess,
    refetch,
  } = trpc.user.purchaseStock.useQuery(
    {
      stockId: stockSymbol,
      quantity: shares,
      userId: id as string,
    },
    { enabled: false }
  );

  const ok = async () => {
    if (shares > 0) {
      await refetch();
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Thanks for your purchase!",
        description: result.message,
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      if (error.message === "Not enough funds") {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  }, [result]);
  return (
    <>
      <input
        type="number"
        onChange={(e) => setShares(parseInt(e.target.value))}
        className="text-xs  bg-slate-100 p-4 rounded hover:shadow-lg text-center cursor-pointer mt-4"
        placeholder="Amount"
      />
      <button
        onClick={ok}
        className={buttonVariants({
          size: "lg",
          className: "mt-4 mb-4 w-full",
        })}
      >
        Buy {stockSymbol}
      </button>
    </>
  );
};

export default BuyStockButton;
