import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { IoSearchSharp } from "react-icons/io5";
import MovieBox from "../components/MovieBox";
import { MyContext } from "../context/Mycontext";

const Home = () => {
  const { category, setCategory, suggestedItems, setSuggestedItems, Movies } =
    useContext(MyContext);
  const [searchItems, setSearchItems] = useState([]);
  const [movies, setMovies] = useState(Movies);
  const [searchText, setSearchText] = useState("");

  const handleCategory = (value) => {
    setCategory(value);
    if (!suggestedItems.length) {
      if (!searchItems.length) {
        if (value === "Movies") {
          setMovies(Movies.filter((movie) => movie.Type === "movie"));
        } else if (value === "TV Shows") {
          setMovies(Movies.filter((movie) => movie.Type === "series"));
        } else {
          setMovies(Movies);
        }
      } else {
        if (value === "Movies") {
          setMovies(searchItems.filter((movie) => movie.Type === "movie"));
        } else if (value === "TV Shows") {
          setMovies(searchItems.filter((movie) => movie.Type === "series"));
        } else {
          setMovies(searchItems);
        }
      }
    } else {
      console.log(suggestedItems);
      if (value === "Movies") {
        setMovies(suggestedItems.filter((movie) => movie.Type === "movie"));
      } else if (value === "TV Shows") {
        setMovies(suggestedItems.filter((movie) => movie.Type === "series"));
      } else {
        setMovies(Movies);
        setSuggestedItems("");
      }
    }
  };

  const handleSearch = async () => {
    if (searchText !== "") {
      try {
        let data = await fetch(
          `https://www.omdbapi.com/?apikey=5dceb21e&s=${searchText}&page=1`
        );
        let convertedData = await data.json();
        setSearchItems(convertedData.Search || []);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    } else {
      setMovies(Movies);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchText);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setSearchText("");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (suggestedItems.length) {
      setMovies(suggestedItems);
    } else if (searchItems.length) {
      setMovies(searchItems);
    } else {
      setMovies(Movies);
      handleCategory(category);
    }
  }, [searchItems, suggestedItems, category]);

  return (
    <div className="min-h-screen bg-[#12172A]">
      <div className="relative">
        <div className="absolute top-[50px] right-1 w-[300px] md:w-[700px] h-[480px] bg-[#171A3B] filter blur-3xl rounded-[764px]"></div>
        <div className="absolute top-[80px] left-[-40px] w-[300px] md:w-[700px] h-[480px] bg-[#0F2B43] filter blur-3xl rounded-[764px] z-0"></div>
      </div>
      <div className="relative z-20">
        <Header />
        <div className="px-5 md:px-20 py-10">
          <h1 className="text-[#EBF0F6] py-5 text-6xl font-semibold">
            MovieMatrix
          </h1>
          <p className="text-[#8896A8]">
            List of movies and TV Shows, I, Bibhuti Bhusan Nayak have watched
            till date.
          </p>
          <p className="text-[#8896A8]">
            Explore what i have watched and also feel free to make a suggestion.
          </p>
          <div className="relative py-10">
            <input
              type="search"
              name="search"
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Search Movies or TV Shows"
              className="bg-[#12172A] placeholder:text-gray-600 text-gray-400 text-xs h-14 pl-10 w-[65%] md:w-1/4 rounded-lg focus:outline-none border border-gray-700"
            />
            <button
              onClick={() => handleSearch(searchText)}
              className="absolute left-2 top-10 mt-[18px] mr-4"
            >
              <IoSearchSharp size={20} className="text-gray-700" />
            </button>
          </div>
          <div className="bg-[#0C2234] text-sm font-semibold flex justify-between rounded-lg p-1 pt-[5px] pb-[6px] px-2 w-[70%] md:w-1/4">
            <button
              onClick={() => handleCategory("All")}
              className={`flex-1 py-2 rounded-md text-[#8896A8] ${
                category === "All" ? "bg-[#796DF5] text-[#BFB7FD]" : null
              }`}
            >
              {suggestedItems.length ? "Home" : "All"}
            </button>
            <button
              onClick={() => handleCategory("Movies")}
              className={`flex-1 py-2 pl-1 pr-2 rounded-md text-[#8896A8] ${
                category === "Movies" ? "bg-[#796DF5] text-[#BFB7FD]" : null
              }`}
            >
              Movies
            </button>
            <button
              onClick={() => handleCategory("TV Shows")}
              className={`flex-1 py-2 px-1 rounded-md whitespace-nowrap text-[#8896A8] ${
                category === "TV Shows" ? "bg-[#796DF5] text-[#BFB7FD]" : null
              }`}
            >
              TV Shows
            </button>
          </div>
          <p className="text-[#737F95] pt-10 pb-6">
            <span className="text-3xl font-bold">{category}</span>{" "}
            <span className="text-xs font-semibold">({movies.length})</span>
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-7 py-5">
            {movies.map((movie, index) => (
              <MovieBox key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
