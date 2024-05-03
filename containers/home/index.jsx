"use client";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featured-movie";
import { useState, useEffect } from "react";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({ selectedCategory }) => {
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
      {selectedCategory.movies.length > 0 ? (
        <MoviesSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      ) : (
        <>
          <MoviesSection
            title="Popular Films"
            movies={Movies.results.slice(1, 7)}
          />
          <MoviesSection
            title="Your Favorites"
            movies={Movies.results.slice(7, 13)}
          />
        </>
      )}
    </div>
  );
};

export default HomeContainer;
