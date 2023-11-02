"use client";

import { buttonVariants } from "../../ui/button";
import { useUserActions } from "@/providers/userActionsProvider";
export default function Transactions({ userStock }: { userStock: any }) {
  const { userActions, setUserActions } = useUserActions();

  return (
    <div>
      <h1>Transactions {userStock.message}</h1>
      <p>{userActions ? "1" : "2"}</p>
      <button
        className={buttonVariants({
          size: "lg",
          className: "w-full",
          variant: "outline",
        })}
        onClick={() => setUserActions(!userActions)}
      >
        Click
      </button>
    </div>
  );
}
