"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignLeft, Search } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import LogButton from "./UserButton";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 ">
      <div className="items-center justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src="/logo_black.svg" width={100} height={50} alt="logo" />
          </Link>
          <div className="md:hidden">
            <button
              className=" outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <AlignLeft />
            </button>
          </div>
        </div>

        <div
          className={`flex justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="  hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <li>
              <form className="flex items-center  space-x-2 border rounded-md p-2">
                <Search className="h-5 w-5 flex-none text-gray-300" />
                <input
                  className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </li>

            <li>
              <LogButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
