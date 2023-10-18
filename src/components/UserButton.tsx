"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const LogButton = () => {
  const { data: session, status } = useSession();

  const isLoggedin = session && status === "authenticated";

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      {!isLoggedin ? (
        <Link href="/login" className={buttonVariants({ size: "lg" })}>
          Login
        </Link>
      ) : isLoggedin ? (
        <button
          className={buttonVariants({ size: "lg" })}
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      ) : null}
    </>
  );
};

export default LogButton;
