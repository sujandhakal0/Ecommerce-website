import React from "react";
import image32 from "../images/image32.png";
import sofa from "../images/sofa.png";
import { LuDiamond } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="relative top-[-28px]">
        <LuDiamond className="text-[#FB2E86] text-[9px] mg:text-sm" />
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="bg-[#f2f0ff]  flex justify-center  ">
          <div className="container flex items-center justify-center p-1 ">
            <div className=" md:relative md:top-0 md:h-full lg:block  hidden">
              <img src={image32} alt="" />
            </div>

            <div className="md:flex md:flex-col md:gap-4 flex flex-col gap-2 sm:gap-6">
              <div className="flex flex-col sm:gap-3 gap-1">
                <div className=" text-secondary font-[Lato] font-bold text-[9px] md:text-base">
                  Best Furniture For Your Castle....
                </div>
                <div className="font-['Josefin_Sans'] font-bold 2xl:text-[53px] 2xl:leading-[69px]  md:text-3xl sm:text-2xl text-xl leading-5">
                  New Furniture Collection Trends in 2020
                </div>
                <div className="text-[#8A8FB9] text-[9px] md:text-sm  leading-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
              </div>

              <div>
                <button className="bg-secondary hover:bg-[#f14dfa] ransition-colors duration-300 py-1 px-2 sm:py-2 sm:px-4  md:py-4 md:px-9  rounded text-white font-bold text-sm">
                  Shop Now
                </button>
              </div>
            </div>

            <div className=" md:p-6 relative left-3">
              <img src={sofa} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

export default ImageSection;
