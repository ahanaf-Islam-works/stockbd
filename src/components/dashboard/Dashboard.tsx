import Profile from "./profile/Profile";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { serverClient } from "@/trpc/serverClient";
import type { Session } from "next-auth";
import Personal from "./Personal";

export default async function Dashboard({ session }: { session: Session }) {
  const userInfo = session.user;
  const graphData = await serverClient.user.getStockGraphData();
  const userStock = await serverClient.user.getAllPersonalStocks();
  const realTimeStockData = await serverClient.user.getStockDataRealtime();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 font-light mx-5 min-h-screen rounded-md mt-4 mb-4 p-2">
        <div
          id="user"
          className="sticky top-0 min-h-full shadow rounded-md lg:col-span-2 col-span-12 m-auto w-full sm:w-full p-4 order-3 md:order-1"
        >
          {session && userInfo && <Profile session={session} />}
          <Link
            href="/"
            className="shadow-sm bg-white p-6 rounded flex flex-col mb-7 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <MessageSquare
                size={40}
                className="border-2 border-cyan-950 rounded-full p-2"
              />
              <p className="text-base font-semibold text-zinc-700">
                Customer Support
              </p>
            </div>
          </Link>
        </div>

        <Personal
          graphData={graphData}
          userStock={userStock}
          stocks={realTimeStockData}
        />
      </section>
    </>
  );
}
