import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieBox = ({ movie }) => {
  const [rating, setRating] = useState("");
  useEffect(() => {
    const getItem = async () => {
      try {
        let data = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=5dceb21e`
        );
        let convertedData = await data.json();
        setRating(convertedData.imdbRating);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    getItem();
  }, []);

  return (
    <div className="bg-[#2B2A3C] rounded-md">
      <Link to={`/movie/${movie.Title}`} state={{ movie }}>
        <div className="relative rounded-md">
          <div className="bg-black absolute px-1 md:px-0 py-[2px] md:py-1 left-4 top-4 rounded-md flex gap-[2px] md:gap-1 text-orange-300">
            <FaRegStar className="md:mt-[3px] w-3 md:w-8" />
            <p className="md:-ml-2 md:px-0 md:pr-2 text-xs md:text-base">
              {rating}
            </p>
          </div>
          <img
            src={movie.Poster}
            alt="image"
            className="p-2 rounded-md h-48 md:h-96 w-96"
          />
        </div>
        <p className="p-2 md:pb-[10%] text-[#C2C1CF] text-sm font-semibold">
          {movie.Title}
        </p>
      </Link>
    </div>
  );
};

export default MovieBox;
