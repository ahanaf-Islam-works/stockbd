import Profile from "./Profile";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import Market from "./Market";
import MarketValue from "./MarketValue";
import Portfolio from "./Portfolio";
import PersonalGraph from "./PersonalGraph";
import Transactions from "./Transactions";
import { serverClient } from "@/trpc/serverClient";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const userInfo = session?.user;
  const graphData = await serverClient.user.getStockGraphData();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 font-light mx-5 min-h-screen rounded-md mt-4 mb-4 p-2">
        <div
          id="user"
          className="sticky top-0 min-h-full shadow rounded-md lg:col-span-2 col-span-12 m-auto w-full sm:w-full p-4 order-3 md:order-1"
        >
          {session && userInfo && <Profile user={userInfo} />}
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
                {" "}
                Customer Support{" "}
              </p>
            </div>
          </Link>
        </div>

        <div
          id="current"
          className="min-h-full shadow rounded-md lg:col-span-3 col-span-12 m-auto w-full sm:w-full p-4 order-2"
        >
          <div className="flex flex-col">
            <Market />
            <MarketValue chartdata={graphData} />
          </div>
        </div>

        <div
          id="portfolio"
          className="min-h-full shadow rounded-md lg:col-span-5 col-span-12 m-auto w-full sm:w-full p-4 order-1 md:order-3"
        >
          <div className="flex flex-col gap-4">
            <Portfolio />
            <PersonalGraph />
          </div>
        </div>

        <div
          id="previous"
          className="lg:col-span-8 col-span-12 lg:col-start-3 shadow rounded-md order-4"
        >
          <Transactions />
        </div>
      </section>
    </>
  );
}
