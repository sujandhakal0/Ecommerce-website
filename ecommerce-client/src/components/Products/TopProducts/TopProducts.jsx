import React from "react";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../sliderImages/image1.png";
import image2 from "../../sliderImages/image2.png";
import image3 from "../../sliderImages/image3.png";
import image4 from "../../sliderImages/image4.png";
import colors from "../../sliderImages/colors.png";

const TopProducts = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div>
        <HiOutlineMinusSmall className="text-5xl text-[#febad7] mt-8" />
      </div>
    ),
  };

  const productList = [
    {
      title: "Cantilever chair",
      image: (
        <img
          src={image1}
          alt="Cantilever chair"
          className="w-[178px] h-[178px]"
        />
      ),
      colors: <img src={colors} alt="Cantilever chair" />,
      Code: "Y523201",
      price: "$42.00",
      button: "View Details",
    },
    {
      title: "Cantilever chair",
      image: (
        <img
          src={image2}
          alt="Cantilever chair"
          className="w-[178px] h-[178px]"
        />
      ),
      colors: <img src={colors} alt="Cantilever chair" />,
      Code: "Y523201",
      price: "$42.00",
      button: "View Details",
    },
    {
      title: "Cantilever chair",
      image: (
        <img
          src={image3}
          alt="Cantilever chair"
          className="w-[178px] h-[178px]"
        />
      ),
      colors: <img src={colors} alt="Cantilever chair" />,
      Code: "Y523201",
      price: "$42.00",
      button: "View Details",
    },
    {
      title: "Cantilever chair",
      image: (
        <img
          src={image4}
          alt="Cantilever chair"
          className="w-[178px] h-[178px]"
        />
      ),
      colors: <img src={colors} alt="Cantilever chair" />,
      Code: "Y523201",
      price: "$42.00",
      button: "View Details",
    },
  ];
  return (
     <div className="w-full flex justify-center">
      <div className="slider-container container xl:pt-[160px] lg:pb-[126px] pt-[96px] sm:pb-[96px] ">
        <Slider {...settings}>
          {productList.map((list, index) => (
            <div key={index} className=" !flex !justify-center  ">
              <div
                key={index}
                className="!w-[270px]  h-[361px] shadow-xl shadow-slate-100 mb-[1px] hover:bg-primary-dark1 group cursor-pointer hover:translate-y-[-10px] transition-transform duration-300"
              >
                <div className="h-full flex flex-col justify-between group-hover:translate-y-[-10px] transition-transform duration-300 relative">
                  <div className="w-[275px] h-[240px] flex justify-center items-center bg-[#f6f7fb]">
                    <div className="hidden  hover:flex absolute top-0 left-2 gap-2 mt-8">
                      {/* <MdOutlineShoppingCart className="w-[19px]  h-[19px] text-[#1697f7]" /> <IoMdHeartEmpty className="w-[19px]  h-[19px] text-[#1697f7]" /> <FaSearchPlus className="w-[19px]  h-[19px] text-[#1697f7] text-[12px] " /> */}
                    </div>
                    <div className="mb-4 ">{list.image}</div>
                    {/* <div className="hidden hover:block absolute bottom-[130px] m-2"><button className="py-1 px-2 rounded bg-[#08d15f]  text-white">{list.button}</button></div> */}
                    
                    
                  </div>
                  <div className="p-4 flex flex-col items-center gap-2 group-hover:text-[#fff]">
                    <div className="text-center text-secondary font-[Lato] font-bold text-[18px] group-hover:text-[#fff]">
                      {list.title}
                    </div>
                    <div>{list.colors}</div>
                    <div className="text-primary-dark font-[Josefin Sans] text-[14px] group-hover:text-[#fff]">
                      Code - {list.Code}
                    </div>
                    <div className="text-primary-dark font-[Lato] text-[14px] group-hover:text-[#fff]">
                      {list.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopProducts;
