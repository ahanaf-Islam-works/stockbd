"use client";
import { createContext, useContext, useState } from "react";
import { RealTimeStockProps } from "@/props/realTimeStockProps";

type userContextProps = {
  currentMarket: RealTimeStockProps | null;

  userActions: {
    name: string;
    price: string;
    amount: number;
  } | null;

  setUserActions: React.Dispatch<
    React.SetStateAction<userContextProps["userActions"]>
  >;

  setCurrentMarket: React.Dispatch<
    React.SetStateAction<userContextProps["currentMarket"]>
  >;
};

const UserActionsContext = createContext<userContextProps>({
  userActions: null,
  setUserActions: () => {},
  currentMarket: null,
  setCurrentMarket: () => {},
});

const useUserActions = () => useContext(UserActionsContext);

const UserActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userActions, setUserActions] =
    useState<userContextProps["userActions"]>(null);
  const [currentMarket, setCurrentMarket] = useState<RealTimeStockProps | null>(
    null
  );

  return (
    <UserActionsContext.Provider
      value={{ userActions, setUserActions, currentMarket, setCurrentMarket }}
    >
      {children}
    </UserActionsContext.Provider>
  );
};

export { UserActionsContext, useUserActions, UserActionsProvider };
