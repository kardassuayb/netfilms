"use client";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featured-movie";
import { useState, useEffect } from "react";
import Categories from "@/components/categories";

const HomeContainer = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex(
        (prevIndex) => (prevIndex + 1) % Movies.results.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <FeaturedMovie movie={Movies.results[currentMovieIndex]} />
      <Categories categories={Genres.genres.slice(0, 6)} />
    </div>
  );
};

export default HomeContainer;
