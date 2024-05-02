import Link from "next/link";

const MovieDetailNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center my-auto min-h-full">
      <h1 className="text-2xl">
        Sorry, We couldn&apos;t find the movie you looking for !
      </h1>
      <Link href="/" className="underline text-lg mt-2 hover:text-[#eeeeeea8]">
        Go Home
      </Link>
    </div>
  );
};

export default MovieDetailNotFound;
