"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const searchParams = useSearchParams();
  const callBack = searchParams.get("callBackUrl") || "/dashboard";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValue({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValue.email,
        password: formValue.password,
        callBack,
      });

      setLoading(false);

      if (!res?.error) {
        router.push(callBack);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
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
          <h3 className="text-3xl font-bold">Login</h3>
          <p className="text-sm text-gray-600">with your Email and Password</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-6 h-6 border-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <form onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
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
                {loading ? "loading..." : "Sign In"}
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
                Sign in With &nbsp; &nbsp;
                <FaGoogle />
              </Link>
              <Link
                href="/"
                className={buttonVariants({
                  size: "lg",
                  className: "mt-5 border w-full",
                })}
              >
                Sign in With &nbsp; &nbsp;
                <FaGithub />
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link href="/" className="hover:underline">
                  Sign Up here
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
}
