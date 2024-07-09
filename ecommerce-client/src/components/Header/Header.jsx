import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className="flex justify-center bg-[#7E33E0] text-white p-[10px]">
        <div className="wrapper flex justify-between w-4/5">
          <div className="flex gap-[48px] ">
            <div className="flex gap-[10px] items-center">
              <MdOutlineEmail />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <FaPhone />
              <p>(12345)67890</p>
              (12345)67890
            </div>
          </div>

          <div>
            <div className="flex gap-[31px]">
              <div className="flex Wishlist items-center">
                <p>English</p> <IoIosArrowDown />{" "}
              </div>
              <div className="flex items-center">
                <p>USD</p> <IoIosArrowDown />{" "}
              </div>
              <div className="flex items-center">
                <p>Login</p> <CiUser />{" "}
              </div>
              <div className="flex items-center">
                <p>Wishlist</p> <CiHeart />{" "}
              </div>

              <div className="flex items-center">
                <MdOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
