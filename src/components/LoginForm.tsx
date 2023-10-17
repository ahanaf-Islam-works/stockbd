import Link from "next/link";
import Wrapper from "./Wrapper";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function LoginForm() {
  return (
    <Wrapper full>
      <div className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-1/2 bg-slate-600 text-white m-auto p-6 rounded-lg ">
        <div className="font-light text-zinc-300 mt-4 mb-4">
          <h3>Login</h3>
          <p>with your Email and Password</p>
        </div>

        <form action="">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-2 mt-4 mb-4 rounded-md"
            placeholder="Your Email"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full p-2 mt-4 mb-4 rounded-md"
            placeholder="Your Password"
          />
          <input
            type="submit"
            className={buttonVariants({
              size: "lg",
              className: "flex items-center w-full mt-3",
            })}
          />
          {/* <p className="text-red-200">Error Message</p> */}
        </form>

        <span className="mx-auto block text-center mt-4 mb-4">-or-</span>

        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={buttonVariants({
              size: "lg",
              className: "flex items-center w-full",
            })}
          >
            Sign in With &nbsp; &nbsp;
            <FaGoogle />
          </Link>
          <span className="w-3"></span>

          <Link
            href="/"
            className={buttonVariants({
              size: "lg",
              className: "flex items-center w-full",
            })}
          >
            Sign in With &nbsp; &nbsp;
            <FaGithub />
          </Link>
        </div>

        <div>
          <p>
            Dont have an account <Link href="/">Sign Up here</Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
