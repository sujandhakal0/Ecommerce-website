import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser, CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUser, logoutReduxUser } from "../../../redux/slices/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxUser = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.items);

  const isLoggedIn = reduxUser || JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(logoutReduxUser());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-primary flex justify-center text-white font-['Josefin_Sans'] text-sm md:text-base">
        <div className="flex gap-4 justify-center md:justify-between py-4 container flex-wrap md:flex">
          <div className="flex md:gap-[48px] gap-[16px]">
            <div className="flex gap-[10px] items-center">
              <MdOutlineEmail />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="mr-[10px] flex gap-[10px] items-center">
              <FaPhone />
              <p>(12345)67890</p>
            </div>
          </div>

          {/* toggle */}
          <div className="flex font-medium flex-wrap">
            <div className={`flex gap-[15px] cursor-pointer`}>
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>English</p> <IoIosArrowDown />
              </div>
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>USD</p> <IoIosArrowDown />
              </div>
              {isLoggedIn ? (
                <div
                  className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1"
                  onClick={handleLogout}
                >
                  <p>Logout</p> <CiUser />
                </div>
              ) : (
                <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                  <Link to="/login">Login</Link> <CiUser />
                </div>
              )}
              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 gap-1">
                <p>Wishlist</p> <CiHeart />
              </div>

              <div className="flex items-center hover:text-gray-300 transition-colors duration-300 text-lg">
                <div className="flex items-center">
                  <Link to="/cart">
                    <MdOutlineShoppingCart />
                  </Link>
                  {cartItems && cartItems.length > 0 && (
                    <span className="ml-2">({cartItems.length})</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
