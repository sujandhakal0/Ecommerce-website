import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import coloredCircles from "./images/coloredCircles.png";
import main from "./images/main.png";

import { FaCircle } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <Header />

      {/* ............................ */}
      <div className="w-full  flex justify-center bg-[#f6f5ff] py-[98px]">
        <div className="container  flex flex-col gap-2">
          <div className="font-['Josefin_Sans'] font-bold text-[36px] text-primary-dark">
            Contact Us
          </div>
          <div className="text-base ">
            Home.Pages.
            <span className="text-secondary font-[500]">Contact Us</span>
          </div>
        </div>
      </div>
      {/* ............................ */}
<div className="w-full flex justify-center">
      <div className="sm:my-[55px] my-[50px] lg:my-[120px] container">
        <section className="flex flex-col gap-8  lg:flex-row 2xl:gap-48 lg:mb-[80px] 2xl:mb-[120px]">
          <div className="flex flex-col gap-6   xl:w-[550px]">
            <div className="">
              <p className="font-['Josefin_Sans'] font-bold text-[36px] text-primary-dark">
                Information About us
              </p>

              <p className="font-['lato'] text-[#8a8fb9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>

              <img
                className="w-[95px] h-[20px] sm:h-[25px] sm:w-[103px] mt-2"
                src={coloredCircles}
                alt=""
              />
            </div>
          </div>

          <div className="text-sm sm:text-base mt-4">
            <div className="font-['Josefin_Sans'] font-bold text-[36px] text-primary-dark ">
              Contact Way
            </div>

            <div className="w-[388px] h-[100px] sm:w-[489px] sm:h-[155px] flex justify-between my-3">
              <div className="flex flex-col justify-between">
                <div className="font-['lato'] text-[#8a8fb9] flex items-center gap-2  sm:mt-2">
                  <FaCircle className="text-[#5726df] sm:text-2xl lg:text-3xl xl:text-4xl" />
                  <div>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="font-['lato'] text-[#8a8fb9] flex items-center gap-2 ">
                  <FaCircle className="text-[#ffb265] sm:text-2xl lg:text-3xl xl:text-4xl" />
                  <div>
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="font-['lato'] text-[#8a8fb9] flex items-center gap-2  sm:mt-2">
                  <FaCircle className="text-secondary sm:text-2xl lg:text-3xl xl:text-4xl" />
                  <div>
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                  </div>
                </div>
                <div className="font-['lato'] text-[#8a8fb9] flex items-center gap-2">
                  <FaCircle className="text-[#1be982] sm:text-2xl lg:text-3xl xl:text-4xl" />
                  <div>
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-between xl:gap-11">
          <div className="flex flex-col gap-6  mt-4 lg:w-[475px] xl:w-[534px] xl:gap-11">
            <div className="xl:flex xl:flex-col xl:gap-4">
              <p className="font-['Josefin_Sans'] font-bold text-[36px] text-primary-dark">
                Get In Touch
              </p>

              <p className="font-['lato'] text-[#8a8fb9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
            </div>

            <div className="xl:w-[550px]">
              <form action="" className="flex flex-col gap-3 xl:gap-8">
                <div className="flex flex-col gap-3  xl:flex-row x:justify-between xl:w-[550px] xl:gap-[45px]">
                  <input
                    className="border-[#e7e6ef] border-solid  border-2 p-2 xl:w-[255px]" 
                    type="text"
                    placeholder="Your Name*"
                  />
                  <input
                    className="border-[#e7e6ef] border-solid  border-2 p-2 xl:w-[255px]"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>

                <input
                  className="border-[#e7e6ef] border-solid  border-2 p-2"
                  type="text"
                  placeholder="Subject*"
                />
                <input
                  className="border-[#e7e6ef] border-solid  border-2 p-2"
                  type="text"
                  placeholder="Type Your Messege*"
                />
                <button className="bg-secondary hover:bg-[#f14dfa] font-['Josefin_Sans'] ransition-colors duration-300 p-2.5 sm:p-3 sm:py-2 sm:px-4  md:py-4 md:px-9  rounded text-white font-bold text-sm lg:w-[157px]">
                  Send Mail
                </button>
              </form>
            </div>
          </div>
          <div className="hidden lg:block 2xl:m">
            <img src={main} alt=""  />
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
