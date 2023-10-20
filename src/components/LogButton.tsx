"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

const LogButton = ({
  getStarted,
  className,
}: {
  getStarted?: boolean;
  className?: string;
}) => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const isLoggedin = session && status === "authenticated";
  const isHomepage = pathname === "/";
  const isDashboard = pathname === "/dashboard";

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      {!getStarted ? (
        <>
          {!isLoggedin ? (
            <Link
              href="/register"
              className={buttonVariants({ size: "lg", className })}
            >
              Sign Up
            </Link>
          ) : isLoggedin && !isDashboard ? (
            <Link
              href="/dashboard"
              className={buttonVariants({ size: "lg", className })}
            >
              Dashboard
            </Link>
          ) : isLoggedin && isDashboard ? (
            <button
              onClick={handleSignOut}
              className={buttonVariants({ size: "lg", className })}
            >
              Sign Out
            </button>
          ) : null}
        </>
      ) : (
        <>
          {!isLoggedin ? (
            <Link
              href="/login"
              className={buttonVariants({ size: "lg", className })}
            >
              Get Started
            </Link>
          ) : isLoggedin ? (
            <Link
              href="/dashboard"
              className={buttonVariants({ size: "lg", className })}
            >
              Get Started
            </Link>
          ) : null}
        </>
      )}
    </>
  );
};

export default LogButton;
