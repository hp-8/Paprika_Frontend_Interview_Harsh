"use client";

import Image from "next/image";
import logo from "../assets/header_logo.png";
import search from "../assets/header_search.png";
import location from "../assets/header_location.png";

const Header = () => {
  return (
    <nav className="header-container mx-2 sm:mx-4 p-2 sm:p-4 shadow">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto flex justify-between items-center ">
          <Image
            src={logo}
            alt="Paprika Logo"
            className="w-auto h-7 md:h-9 max-w-[8rem] md:max-w-[10rem]"
          />
          <div className="flex md:hidden space-x-2">
            <button className="text-pinkHero text-xs font-bold px-3 py-1 rounded-lg">
              Sign Up
            </button>
            <button className="text-pinkHero text-xs font-bold bg-pinkHero bg-opacity-20 antialiased rounded-full px-3 py-1">
              Log In
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto order-3 md:order-2 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row justify-center items-center bg-white p-2 rounded-lg shadow-md">
            <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
              <Image
                src={search}
                alt="Search Bar Image"
                className="h-5 w-5 mr-2"
              />
              <input
                type="text"
                placeholder='"Gluten Free Restaurants"'
                className="focus:outline-none w-full md:w-48 lg:w-64 text-greyPC text-xs md:text-sm"
              />
            </div>
            <span className="hidden md:inline text-gray-300 mx-2">|</span>
            <div className="flex items-center w-full md:w-auto">
              <Image
                src={location}
                alt="location Image"
                className="h-5 w-5 mr-2"
              />
              <input
                type="text"
                placeholder='"2374 Willow St. Ave"'
                className="focus:outline-none w-full md:w-40 lg:w-56 text-greyPC text-xs md:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2 order-2 md:order-3">
          <button className="text-pinkHero text-xs md:text-sm font-bold px-4 py-2 rounded-lg">
            Sign Up
          </button>
          <button className="text-pinkHero text-xs md:text-sm font-bold bg-pinkHero bg-opacity-20 antialiased rounded-full px-4 py-2">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
