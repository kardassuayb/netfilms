import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie;

  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
      <h1 className={`${styles.movieTitle} transition duration-500 ease-out`}>
        {title}
      </h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-[#eee] text-[#222] w-[300px] rounded-full text-xl font-bold hover:text-[#eee] hover:bg-black/60 transition duration-300 ease-out hover:ease-in"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center border-2 border-solid border-[#eee] rounded-full w-16 h-16 text-[#eee] hover:text-[#eee] hover:bg-black/60 transition duration-300 ease-out hover:ease-in hover:border-none">
          <FaPlus />
        </button>
      </div>
      <div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent via-black-90 via-black-70 -z-10"></div>
        <Image
          className="!h-auto -z-20 max-h-screen object-cover transition duration-500 ease-out"
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
