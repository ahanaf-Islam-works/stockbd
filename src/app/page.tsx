import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import {
  ArrowRight,
  User2Icon,
  BarChart2,
  CircleDollarSign,
  CandlestickChart,
  Presentation,
  Users,
  ListPlus,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Steps from "@/components/Steps";

const points = [
  {
    icon: User2Icon,
    title: "Create an account",
    description:
      "Create an account with your email and password. You can also sign in with your Google account.",
  },

  {
    icon: BarChart2,
    title: "Explore the Virtual Stock Market",
    description:
      "Explore the virtual stock market that closely simulates the real Dhaka and Chittagong stock exchanges.",
  },
  {
    icon: CircleDollarSign,
    title: "Practice Trading with Virtual Currency",
    description:
      "Trade with virtual currency to practice your trading skills and test your strategies.",
  },
  {
    icon: CandlestickChart,
    title: "Access Learning Tools",
    description:
      "Explore the educational resources and tools to learn about the stock market and trading strategies.",
  },
  {
    icon: Presentation,
    title: "Engage with the Community",
    description:
      "StockBD offers a community forum where you can connect with other like-minded individuals. Discuss market trends, share insights, and ask questions",
  },
  {
    icon: ListPlus,
    title: "Track Progress and Improve Skills",
    description:
      "You have the ability to track your trading performance, analyze your trades, and assess the effectiveness of your strategies.",
  },
];

export default function Home() {
  return (
    <main>
      <Wrapper className="flex justify-center items-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit text-xs items-center justify-center px-5 border rounded-full border-gray-500 py-1 ">
          <span>stockBd is now Public!</span>
        </div>
        <h1>Empowering Investors, One Trade at a Time.</h1>
        <p>
          At StockBD, we believe in democratizing the stock market, providing a
          platform where everyone can learn, practice, and grow as an investor.
          With virtual simulations of Dhaka and Chittagong stock exchanges, we
          empower you to make informed decisions, turning knowledge into profit.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 border border-white",
            variant: "default",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-8 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/dashboard.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 pb-12 mt-16 flex flex-col items-center">
          <h2>How it works</h2>
          <ol className="my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Steps steps={points} />
          </ol>
        </div>
      </Wrapper>
    </main>
  );
}
