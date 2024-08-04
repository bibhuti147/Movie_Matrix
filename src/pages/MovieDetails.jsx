import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { FaRegStar } from "react-icons/fa";
import { MyContext } from "../context/Mycontext";

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state || {};
  const [details, setDetails] = useState([]);
  const [excerpt, setExcerpt] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the spinner after 1 second (1000 milliseconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const getItem = async () => {
    try {
      let data1 = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=defbdfaf`
      );
      let convertedData1 = await data1.json();
      setDetails(convertedData1);

      let data2 = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=defbdfaf`
      );
      let convertedData2 = await data2.json();
      setExcerpt(convertedData2.Plot);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
    getItem();
  }, []);

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          style="border-top-color:transparent"
          className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p className="ml-2 text-[#E3E9F8]">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#13182C]">
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
            ></div>
            <p className="ml-2 text-[#E3E9F8]">Loading...</p>
          </div>
        ) : (
          <>
            <Header />
            <div className="relative px-20">
              <div className="py-10 rounded-3xl">
                <img
                  src={details.Poster}
                  alt="b_image"
                  className="w-full h-96 object-cover rounded-3xl"
                />
              </div>
              <div className="absolute left-32 bottom-1 bg-opacity-85 w-fit pr-[10%] px-7 py-5 bg-[#1E263D] rounded-3xl">
                <p className="text-xs text-[#8896A8] font-semibold">
                  MovieMatrix /{" "}
                  {details.Type === "movie"
                    ? "Movie"
                    : details.Type === "series"
                    ? "TV Show"
                    : details.Type}
                </p>
                <p className="text-2xl text-[#E3E9F8] font-semibold whitespace-nowrap">
                  {details.Title}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 px-32 py-10 relative z-20">
              <div className="rounded-t-3xl">
                <img
                  src={details.Poster}
                  alt="p_image"
                  className="w-full h-[50vw] object-cover rounded-3xl"
                />
              </div>
              <div className="gap-2">
                <p className="font-bold text-justify text-[#E3E9F8]">
                  {excerpt}
                </p>
                <p className="pr-32 py-5 text-[#8896A8] font-semibold text-sm">
                  {details.Plot}
                </p>
                <div className="bg-black w-[42px] p-1 rounded-md flex gap-1 text-xs text-orange-300">
                  <FaRegStar size={12} className="mt-[2px]" />
                  <p>{details.imdbRating}</p>
                </div>
                <div className="py-2">
                  <p className="text-sm font-semibold text-[#8896A8]">Type</p>
                  <p className="font-semibold text-[#C2C1CF]">
                    {details.Type === "movie"
                      ? "Movie"
                      : details.Type === "series"
                      ? "TV Show"
                      : details.Type}
                  </p>
                </div>
                <div className="py-2">
                  <p className="text-sm font-semibold text-[#8896A8]">
                    Release Date:
                  </p>
                  <p className="font-semibold text-[#C2C1CF]">
                    {details.Released}
                  </p>
                </div>
                <div className="py-2">
                  <p className="text-sm font-semibold text-[#8896A8]">
                    Run time
                  </p>
                  <p className="font-semibold text-[#C2C1CF]">
                    {details.Runtime}
                  </p>
                </div>
                <div className="py-2">
                  <p className="text-sm font-semibold text-[#8896A8]">Genres</p>
                  <p className="font-semibold text-[#C2C1CF]">
                    {details.Genre}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="relative">
          <div className="absolute bottom-10 right-1 w-[700px] h-[480px] bg-[#0B3231] filter blur-3xl rounded-[764px] z-0"></div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
