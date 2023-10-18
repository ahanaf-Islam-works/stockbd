"use client";

import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

type Props = {
  children: React.ReactNode;
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
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </trpc.Provider>
  );
};
