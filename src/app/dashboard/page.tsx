import Dashboard from "@/components/dashboard/Dashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { UserActionsProvider } from "@/providers/userActionsProvider";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <>
        <Dashboard session={session} />
      </>
    );
  }
}
