import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    {
      title: "Catagories",
      items: [
        "Laptops & Computers",
        "Cameras & Photography",
        "Cameras & Photography",
        "Smart Phones & Tablets",
        "Video Games & Consoles",
        "Waterproof Headphones",
      ],
    },
    {
      title: "Customer Care",
      items: [
        "My Accounts",
        "Discounts",
        "Returns",
        "Orders Historys",
        "Orders History",
      ],
    },
    {
      title: "Pages",
      items: [
        "Blog",
        "Browse the Shop",
        "Cameras & Photography",
        "Category",
        "Pre-Built Pages",
        "Visual Composer Elements",
        "WooCommerce Pages",
      ],
    },
  ];

  return (
    <footer className=" w-full  bg-[#eeeffb] text-[#9da1c5]  flex flex-col items-center">
      <div className="container  grid grid-cols-2 lg:grid-cols-5  border-gray-600 gap-4 = py-8 md:py-11 lg:py-[95px]">
        <div className="col-span-2 pt-2 lg:pt-2 flex flex-col gap-3 lg:gap-8">
          <div>
            <div className="text-black text-2xl font-bold lg:text-3xl font-['Josefin_Sans'] ">
              <Link to="/">Hekto</Link>
            </div>
          </div>

          <div>
            <form action="" className="flex flex-col sm:flex-row !lg:w-[377px]">
              <input
                type="text"
                className="w-full sm:w-[80%] lg:w-[55%] p-2 mr-4 lg:mr-0 rounded mb-4 bg-[#f6f6fd] border-[#e7e6ef]"
                placeholder="Enter Email Address"
              />

              <button className=" p-2 mb-4 text-white bg-[#fb2e86] rounded sm:px-4 lg:w-[135px] hover:bg-[#f14dfa] ">
                <div className="font-['Josefin_Sans']">Sign Up </div>
              </button>
            </form>
            <div className="font-base">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-current lg:hidden"></div>
        </div>

        {/* <div className="flex gap-4 track "> */}
        {sections.map((section, index) => (
          <div key={index} className=" flex flex-col gap-3  lg:gap-6 ">
            <div className="font-bold pt-2 text-black sm:text-[22px] font-['Josefin_Sans']  text-lg ">
              {section.title}
            </div>
            <ul className="text-['Lato']">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="py-1 hover:text-gray-500 cursor-pointer "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* </div> */}
      </div>

      <div className="w-full bg-[#e7e4f8] h-[53px] flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center gap-1 sm:flex sm:flex-row sm:justify-between">
          <div>©Webecy - All Rights Reserved</div>
          <div className="flex gap-4">
            <div>
              <FaFacebook className="hover:text-gray-500 cursor-pointer" />
            </div>
            <div>
              <FaInstagram  className="hover:text-gray-500 cursor-pointer"/>
            </div>
            <div>
              <FaTwitter className="hover:text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
