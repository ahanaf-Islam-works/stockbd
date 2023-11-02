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

const UserActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userActions, setUserActions] = useState<boolean>(false);

  return (
    <UserActionsContext.Provider value={{ userActions, setUserActions }}>
      {children}
    </UserActionsContext.Provider>
  );
};

export { UserActionsContext, useUserActions, UserActionsProvider };
