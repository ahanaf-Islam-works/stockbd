import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WrapperProps {
  className?: string;
  children: ReactNode;
  dark?: boolean;
  full?: boolean;
}
// px-3 md:px-10 pt-4 sm:pt-4 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-4 md:pb-8 lg:pb-10 xl:pb-12

const Wrapper = ({ className, children, dark, full }: WrapperProps) => {
  return (
    <section
      className={cn({
        "bg-slate-900 text-white": dark,
        "dark:bg-white dark:text-slate-800": !dark,
      })}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-screen-xl flex flex-col justify-center container sm:pt-4 md:pt-8 lg:pt-10 xl:pt-12",

          {
            "min-h-screen": full,
            "": !full,
          },
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
