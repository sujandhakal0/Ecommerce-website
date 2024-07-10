import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {

  return (
    <div>
      <nav className="bg-[#7E33E0] flex justify-center text-white font-['Josefin_Sans'] text-sm md:text-base">
        <div className="wrapper flex justify-between py-4 container">
          <div className="flex md:gap-[48px] gap-[16px]">
            <div className="flex gap-[10px] items-center ">
              <MdOutlineEmail />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="mr-[10px] flex gap-[10px] items-center">
              <FaPhone />
              <p>(12345)67890</p>
            </div>
          </div>

          {/* toggle */}
          <div className="flex font-medium">
            <div
              className={`flex gap-[15px] cursor-pointer`}
            >
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>English</p> <IoIosArrowDown />
              </div>
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>USD</p> <IoIosArrowDown />
              </div>
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>Login</p> <CiUser />
              </div>
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>Wishlist</p> <CiHeart />
              </div>

              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 text-lg">
                <MdOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;