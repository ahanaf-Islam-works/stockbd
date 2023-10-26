"use client";

import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";
import { UserActionsContext } from "./userActionsProvider";

type Props = {
  children: React.ReactNode;
};

const UserActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [userActions, setUserActions] = useState<boolean>(false);

  return (
    <UserActionsContext.Provider value={{ userActions, setUserActions }}>
      {children}
    </UserActionsContext.Provider>
  );
};

export const NextAuthProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );

  return (
    <UserActionsProvider>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </trpc.Provider>
      </QueryClientProvider>
    </UserActionsProvider>
  );
};
