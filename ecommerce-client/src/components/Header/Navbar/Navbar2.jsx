import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const Navbar2 = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Pages",
      link: "/pages",
    },
    {
      title: "Products",
      link: "/Products",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const [menu, setMenu] = useState("Home");
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full flex justify-center items-center py-5 text-base ">
      <div className="container gap-4 md:gap-8 flex justify-between items-center">
        <div>
          <div className="text-primary-darker text-2xl font-medium md:text-[34px] font-['Josefin_Sans']">
            <Link to="/">Hekto</Link>
          </div>
        </div>

        <div>
          <div className="hidden lg:block">
            <div className=" font-['lato'] cursor-pointer md:flex gap-8 m-0 mx-auto">
              {navLinks.map((navLink, index) => (
                <Link
                  key={index}
                  className={`hover:text-secondary flex items-center ${location.pathname === navLink.link ? 'text-secondary' : ''}`}
                  to={navLink.link}
                  onClick={() => {
                    setMenu(`${navLink.title}`);
                  }}
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center md:ml-auto">
            {/* Adjust margin as needed */}
            <input
              className="border-[#e7e6ef] border-solid container border-2 md:py-[5px] "
              type="text"
            />
            <div className="md:px-4 md:py-[11px] px-2 py-[6px] bg-secondary cursor-pointer hover:bg-[#f14dfa] transition-colors duration-300">
              <FaSearch />
            </div>
          </div>
        </div>
        {/* Logo */}

        {/* Search bar (always visible) */}

        <div className="lg:hidden ">
          <span
            className={`text-3xl hover:text-gray-300 transition-colors duration-300 transform ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            {isMenuOpen ? <IoMdClose /> : <MdOutlineMenu />}
          </span>
        </div>

        {isMenuOpen ? (
          <div className="lg:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((navLink, index) => (
                <Link
                  key={index}
                  className={`hover:text-secondary flex items-center ${location.pathname === navLink.link ? 'text-secondary' : ''}`}
                  onClick={() => {
                    setMenu(`${navLink.title}`);
                  }}
                  to={navLink.link}
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar2;
