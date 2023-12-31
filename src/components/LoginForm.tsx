"use client";

import { signIn, useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function LoginForm() {
  const providers = getProviders();
  const router = useRouter();
  const { status } = useSession();

  const [isPageLoading, setIsPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (status === "loading") {
      setIsPageLoading(true);
    }
    if (status === "authenticated") {
      router.push("/auth-callback");
    }
    if (status === "unauthenticated") {
      setIsPageLoading(false);
    }
  }, [status]);

  const searchParams = useSearchParams();
  const callBack = searchParams.get("/auth-callback") || "/dashboard";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValue({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValue.email,
        password: formValue.password,
        callbackUrl: callBack,
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

  const handleGithubLogin = async () => {
    await signIn("github", { callbackUrl: callBack });
  };
  return (
    <Wrapper>
      <div className="w-4/5 sm:w-3/4 md:w-3/4 lg:w-1/2 bg-gray-100  m-auto p-6 rounded-lg shadow-lg">
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

        {isPageLoading ? (
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

            <div className="my-2 text-center">
              <span className="text-gray-600">-or-</span>
            </div>

            <div className="flex justify-between items-center flex-col md:flex-row">
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
              <button
                onClick={handleGithubLogin}
                className={buttonVariants({
                  size: "lg",
                  className: "mt-5 border w-full",
                })}
              >
                Sign in With &nbsp; &nbsp;
                <FaGithub />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="hover:underline">
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
