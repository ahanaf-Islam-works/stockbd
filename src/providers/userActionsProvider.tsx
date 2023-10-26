"use client";

import { createContext, useContext, useState } from "react";
import { UserActionsContextType } from "@/props/userProps";

const UserActionsContext = createContext<UserActionsContextType>({
  userActions: false,
  setUserActions: () => {},
});

const useUserActions = () => useContext(UserActionsContext);

export { UserActionsContext, useUserActions };
