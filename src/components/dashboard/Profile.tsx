import Link from "next/link";
import { userProps } from "@/props/userProps";
import {
  User,
  LayoutDashboard,
  DollarSign,
  Settings,
  Receipt,
  ArrowLeftRight,
} from "lucide-react";

export default function Profile({ user }: { user: userProps }) {
  const number = user.balance as number;
  return (
    <aside className="bg-white p-6 rounded shadow-sm flex flex-col mb-7">
      <div className="flex items-center gap-4">
        <User size={30} className="border-2 border-cyan-950 rounded-full" />
        <p className="text-base font-semibold text-zinc-700">{user.name}</p>
      </div>
      <div className="flex items-center gap-4 mb-10 border-b-2 pb-4 border-zinc-500">
        <DollarSign
          size={30}
          className="border-2 border-cyan-950 rounded-full"
        />
        <p className="text-base font-semibold text-zinc-700">
          Balance
          <br />
          <span className="font-bold text-zinc-600">
            {number.toLocaleString("en-Us")} BDT
          </span>
        </p>
      </div>

      <ul className="list-none">
        <li className="mb-4">
          <Link href="#" className="text-cyan-950 hover:underline text-sm">
            <LayoutDashboard size={25} className="inline-block mr-2" />{" "}
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="#" className="text-cyan-950 hover:underline text-sm">
            <ArrowLeftRight size={25} className="inline-block mr-2" />{" "}
            Transactions
          </Link>
        </li>
        <li className="mb-4">
          <Link href="#" className="text-cyan-950 hover:underline text-sm">
            <Settings size={25} className="inline-block mr-2" /> Settings &amp;
            Security
          </Link>
        </li>
        <li className="mb-4">
          <Link href="#" className="text-cyan-950 hover:underline text-sm">
            <Receipt size={25} className="inline-block mr-2" /> Billing
          </Link>
        </li>
      </ul>
    </aside>
  );
}
