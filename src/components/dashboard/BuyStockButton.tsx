"USE CLIENT";
import { trpc } from "@/app/_trpc/client";
import { buttonVariants } from "../ui/button";
import { useEffect, useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { useUserActions } from "@/providers/userActionsProvider";
import { RealTimeStockProps } from "@/props/realTimeStockProps";

const BuyStockButton = ({ stock }: { stock: RealTimeStockProps }) => {
  const [shares, setShares] = useState<number>(0);
  const priceNumber = parseInt(stock.lastTradedPrice);
  const { toast } = useToast();
  const { data: session, update } = useSession();
  const { currentMarket, setCurrentMarket, setUserActions } = useUserActions();

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
      stockName: stock.name,
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
        ...session,
        user: {
          ...session?.user,
          balance: result.balance,
        },
      });

      setUserActions({
        name: stock.name,
        price: stock.lastTradedPrice,
        amount: shares,
      });

      setCurrentMarket(stock);
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
        Buy {stock.name}
      </button>
    </>
  );
};

export default BuyStockButton;
