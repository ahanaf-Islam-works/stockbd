"USE CLIENT";
import { trpc } from "@/app/_trpc/client";
import { buttonVariants } from "../ui/button";
import { FC, useEffect, useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { TRPCClientError } from "@trpc/client";

interface BuyStockButtonProps {
  stockSymbol: string;
  price: string;
}

const BuyStockButton: FC<BuyStockButtonProps> = ({ stockSymbol, price }) => {
  const [shares, setShares] = useState<number>(0);
  const priceNumber = useMemo(() => parseFloat(price), [price]);
  const { toast } = useToast();
  const { data: session, update } = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/login");
    }
  }, [session]);

  const {
    data: result,
    error,
    isSuccess,
    refetch,
  } = trpc.user.purchaseStock.useQuery(
    {
      stockName: stockSymbol,
      quantity: shares,
      price: priceNumber,
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
        description: result.balance,
        variant: "success",
      });
      update({
        // only update the balance
        ...session,
        user: {
          ...session?.user,
          balance: result.balance,
        },
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }, [isSuccess, error]);

  if (!session) {
    return null; // or render a login component here
  }

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
