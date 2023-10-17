import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function LoginForm() {
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

        <form action="">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 mb-4 rounded-md border border-gray-300"
            placeholder="Your Email"
          />
          <input
            type="password"
            name=""
            id=""
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
            Login
          </button>
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
      </div>
    </Wrapper>
  );
}
