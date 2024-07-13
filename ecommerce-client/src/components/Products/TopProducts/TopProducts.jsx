import React from "react";
import { HiOutlineMinusSmall } from "react-icons/hi2";
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
      <div className="slider-container container xl:pt-[160px] lg:pb-[126px] pt-[96px] sm:pb-[96px]">
        <Slider {...settings}>
          {productList.map((list, index) => (
            <div className=" !flex !justify-center">
              <div
                key={index}
                className="!w-[270px] h-[361px] shadow-xl shadow-slate-100 mb-[1px] hover:bg-[#2f1ac4] group cursor-pointer"
              >
                <div className="">
                  <div className="w-[270px] h-[236px] flex justify-center items-center bg-[#f6f7fb]">
                    {list.image}
                  </div>
                  <div className="p-4 flex flex-col items-center gap-2 group-hover:text-[#fff]">
                    <div className="text-center text-[#FB2E86] font-[Lato] font-bold text-[18px] group-hover:text-[#fff]">
                      {list.title}
                    </div>
                    <div>{list.colors}</div>
                    <div className="text-[#151875] font-[Josefin Sans] text-[14px] group-hover:text-[#fff]">
                      Code - {list.Code}
                    </div>
                    <div className="text-[#151875] font-[Lato] text-[14px] group-hover:text-[#fff]">
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
