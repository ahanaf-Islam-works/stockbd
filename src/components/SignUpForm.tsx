"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [pageLoading, setPageLoading] = useState(true);

  const { status } = useSession();
  const router = useRouter();

  // check session thne redirect to dashboard

  useEffect(() => {
    if (status === "loading") {
      setPageLoading(true);
    }
    if (status === "authenticated") {
      router.push("/dashboard");
    }
    if (status === "unauthenticated") {
      setPageLoading(false);
    }
  }, [status]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);

      if (res.status == 404) {
        setError("Server not working");
        return;
      }
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      if (res.ok) {
        setPageLoading(true);
        await signIn("credentials", {
          email: formValue.email,
          password: formValue.password,
          callbackUrl: "/dashboard",
        });
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <Wrapper full>
      <div className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-1/2 bg-gray-100 text-gray-800 m-auto p-6 rounded-lg shadow-lg">
        <div className="text-center  mb-8">
          <Image
            src="logo_black.svg"
            width="100"
            height="100"
            alt="logo"
            className="m-auto mb-3"
          />
          <h3 className="text-3xl font-bold">Welcome to StockBd</h3>
          <p className="text-sm text-gray-600">
            Sign up with your Email and Password
          </p>
        </div>

        {pageLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-6 h-6 border-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <form onSubmit={onsubmit}>
              <input
                type="name"
                name="name"
                value={formValue.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 rounded-md border border-gray-300"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formValue.email}
                className="w-full p-3 mb-4 rounded-md border border-gray-300"
                placeholder="Your Email"
              />

              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formValue.password}
                className="w-full p-3 mb-4 rounded-md border border-gray-300"
                placeholder="Your Password"
              />
              <button
                type="submit"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700",
                })}
              >
                {loading ? "loading..." : "Sign Up"}
              </button>
              {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">
                  {error}
                </p>
              )}
            </form>

            <div className="my-6 text-center">
              <span className="text-gray-600">-or-</span>
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/"
                className={buttonVariants({
                  size: "lg",
                  className: "mt-5 border w-full",
                })}
              >
                Signup With &nbsp; &nbsp;
                <FaGoogle />
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  size: "lg",
                  className: "mt-5 border w-full",
                })}
              >
                Signup With &nbsp; &nbsp;
                <FaGithub />
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
}
