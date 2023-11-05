"use client";
import { createContext, useContext, useState } from "react";

type userActionsProps = {
  name: string;
  price: string;
  amount: number;
} | null;

type userContextProps = {
  userActions: userActionsProps;

  currentMarket: userActionsProps[];

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
  currentMarket: [],
  setCurrentMarket: () => {},
});

const useUserActions = () => useContext(UserActionsContext);

const UserActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userActions, setUserActions] =
    useState<userContextProps["userActions"]>(null);
  const [currentMarket, setCurrentMarket] = useState<
    userContextProps["currentMarket"]
  >([]);

  return (
    <UserActionsContext.Provider
      value={{ userActions, setUserActions, currentMarket, setCurrentMarket }}
    >
      {children}
    </UserActionsContext.Provider>
  );
};

export { UserActionsContext, useUserActions, UserActionsProvider };
