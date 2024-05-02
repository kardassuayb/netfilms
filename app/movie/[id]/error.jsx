"use client";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center my-auto min-h-full">
      <h1 className="text-2xl">An error has occured. Sorry for that !</h1>
      <Link href="/" className="underline text-lg mt-2 hover:text-[#eeeeeea8]">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
