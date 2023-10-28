import React from "react";
interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

export default function Steps({ steps }: Props) {
  return (
    <>
      {steps.map((step, index) => (
        <li className="md:flex-1 relative mb-4 p-4" key={index}>
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-center flex justify-center w-full">
              <step.icon className="h-8 w-8 " />
            </span>
            <span className="text-xl font-semibold">{step.title}</span>
            <span className="mt-2">{step.description}</span>
          </div>
        </li>
      ))}
    </>
  );
}
