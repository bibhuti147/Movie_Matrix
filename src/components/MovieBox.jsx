import React, { useContext, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Mycontext";

const MovieBox = ({ movie }) => {
  const { apiKey } = useContext(MyContext);
  const [rating, setRating] = useState("");
  useEffect(() => {
    const getItem = async () => {
      try {
        let data = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
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
          <div className="bg-black p-1 absolute left-4 top-4 rounded-md flex gap-1 text-orange-300">
            <FaRegStar size={17} className="mt-[3px]" />
            <p>{rating}</p>
          </div>
          <img
            src={movie.Poster}
            alt="image"
            className="p-2 rounded-md h-96 w-96"
          />
        </div>
        <p className="p-2 pb-[10%] text-[#C2C1CF] text-sm font-semibold line-clamp-1">
          {movie.Title}
        </p>
      </Link>
    </div>
  );
};

export default MovieBox;
