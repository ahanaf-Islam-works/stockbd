"use client";
import { createContext, useContext, useState } from "react";

type userContextProps = {
  userActions: boolean;
  setUserActions: (value: boolean) => void;
};

const UserActionsContext = createContext<userContextProps>({
  userActions: false,
  setUserActions: () => {},
});

const useUserActions = () => useContext(UserActionsContext);

export { UserActionsContext, useUserActions };
