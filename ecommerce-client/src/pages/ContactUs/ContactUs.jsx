import React from "react";
import Header from "../../components/Header/Header";
import coloredCircles from './images/coloredCircles.png'

const ContactUs = () => {
  return (
    <div>
      <Header />
      {/* ............................ */}
      <div className="w-full  flex justify-center bg-[#f6f5ff] py-[98px]">
        <div className="container  flex flex-col gap-2">
          <div className="font-['Josefin_Sans'] font-bold text-[36px] text-[#101750]">
            Contact Us
          </div>
          <div className="text-base ">
            Home.Pages.
            <span className="text-[#FB2E86] font-[500]">Contact Us</span>
          </div>
        </div>
      </div>
      {/* ............................ */}

      <div>
        <section>
            <div className="">
                <p className="font-['Josefin_Sans'] font-bold text-[36px] text-[#101750]">
                Information About us
                </p>
                <p className="font-['lato'] text-[#8a8fb9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
import coloredCircles from './images/coloredCircles.png'
                <img src={coloredCircles} alt="" />
                </div>
            <div className="font-['Josefin_Sans'] font-bold text-[36px] text-[#101750]">Contact Way</div>

        </section>




        <section></section>
      </div>
    </div>
  );
};

export default ContactUs;
