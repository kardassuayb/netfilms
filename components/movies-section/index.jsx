import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-2xl tracking-tight">{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div
            className="overflow-hidden rounded-md relative shadow-md transition-transform duration-300 ease-out hover:z-10  hover:scale-125"
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
