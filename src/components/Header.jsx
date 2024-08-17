import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { MyContext } from "../context/Mycontext";

const Header = () => {
  const { setCategory, getRandomSuggestions } = useContext(MyContext);

  return (
    <div className="bg-[#121a31] flex justify-between text-sm font-semibold text-[#BFB7FD] px-5 md:px-20 py-5">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 -my-[18px] cursor-pointer"
        />
      </Link>
      <div className="flex gap-5 md:gap-10">
        <div></div>
        <div></div>
        <Link to="/">
          <button
            onClick={getRandomSuggestions}
            className="flex gap-1 whitespace-nowrap"
          >
            Suggest me{" "}
            <FaArrowRightLong size={12} className="mt-[4px] md:mt-[5px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
