import Profile from "./Profile";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
export default function Dashboard() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 font-light mx-5 min-h-screen rounded-md mt-4 mb-4 p-2">
      <div className="min-h-full shadow rounded-md lg:col-span-2 col-span-12 m-auto w-full sm:w-full p-4">
        <Profile />

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

      <div className="min-h-full rounded-md lg:col-span-4 col-span-12 m-auto w-full sm:w-full p-4">
        <h1>Markets Overview</h1>
      </div>

      <div className="min-h-full rounded-md lg:col-span-4 col-span-12 m-auto w-full sm:w-full p-4">
        <h1>Portfolio</h1>
      </div>
    </section>
  );
}
