'use client';

import Image from 'next/image';
import logo from '../assets/header_logo.png';
import search from '../assets/header_search.png';
import location from '../assets/header_location.png';

const Header = () => {
  return (
    <nav className="header-container mx-4 p-4 shadow justify-evenly">
      <div className="search-logo-container mx-auto flex justify-between items-center">
        <Image src={logo} alt="Paprika Logo" className="w-32 h-9" />
        <div className="flex flex-row justify-items-center max-w-2xl  p-2 w-1/3 relative border-b border-gray-300 shadow-md ml-14">
          <Image src={search} alt="Search Bar Image" className="ml-1 h-6 w-6" />
          <input
            type="text"
            placeholder='"Gluten Free Restaurants"'
            className="ml-1 focus:outline-none max-h-7 rounded-lg w-3/4 text-greyPC text-xs"
          />
          <span className="text-gray-300"> | </span>
          <Image src={location} alt="location Image" className="ml-1 h-6 w-6" />
          <input
            type="text"
            placeholder='"2374 Willow St. Ave"'
            className="ml-1 focus:outline-none max-h-7 rounded-lg w-2/5 text-greyPC text-xs"
          />
        </div>
        <div className="flex flex-row w-1/4 justify-evenly">
          <button className="text-pinkHero font-bold w-1/3 h-12 antialiased">Sign Up</button>
          <button className="text-pinkHero font-bold bg-pinkHero bg-opacity-20 antialiased rounded-3xl w-28 h-12">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
