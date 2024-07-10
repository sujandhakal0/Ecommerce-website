import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white  w-full flex justify-center items-center py-5 text-base">
      <div className=" flex justify-between container items-center gap-5">
        <div className="text-black font-medium text-3xl font-['Josefin_Sans']">
          Hekto
        </div>
        <div
          className={`md:flex gap-8 font-['lato'] cursor-pointer ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="hover:text-[#fc62a4] flex items-center">
            Home <IoIosArrowDown />
          </div>
          <div className="hover:text-[#fc62a4]">Pages</div>
          <div className="hover:text-[#fc62a4]">Products</div>
          <div className="hover:text-[#fc62a4]">Blog</div>
          <div className="hover:text-[#fc62a4]">Shop</div>
          <div className="hover:text-[#fc62a4]">Contact</div>
        </div>
        <div className="md:hidden">
          <a
            className="text-2xl hover:text-gray-300 transition-colors duration-300"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            &#8801;
          </a>
        </div>
        <div className=" flex items-center ">
          <input
            className="border-[#e7e6ef] border-solid border-2 py-[5px]"
            type="text"
          />{" "}
          <div className="px-4 py-[11px] bg-[#fb2e86]">
            <FaSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
