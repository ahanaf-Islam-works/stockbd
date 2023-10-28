"use client";
import Wrapper from "@/components/Wrapper";

import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { trpc } from "../_trpc/client";

const Page = () => {
  const router = useRouter();

  const {} = trpc.authCallBack.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push("/dashboard");
      }
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        router.push("/login");
      }
    },
    retry: true,
    retryDelay: 1000,
  });

  return (
    <Wrapper>
      <div className="w-full flex justify-center">
        <div className="flex h-screen flex-col items-center gap-2 mt-0 sm:mt-5 md:mt-10 lg:mt-12">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
          <h3 className="font-semibold text-xl">Setting up your account...</h3>
          <p>You will be redirected automatically.</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
