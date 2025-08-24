import type { FC } from "react";

export const Introduction: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-8 w-[90%]">
      <h2 className="text-xl font-bold mb-1">Hi, I'm Shubham!</h2>
      <p className="text-md text-gray-500 text-center">
        Reading Resumes can be tiring, so please ask me anything below and an AI
        will help you.
      </p>
    </div>
  );
};
