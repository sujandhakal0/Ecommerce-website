import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image1 from "../../sliderImages/image1.png";
// import image2 from "../../sliderImages/image2.png";
// import image3 from "../../sliderImages/image3.png";
// import image4 from "../../sliderImages/image4.png";
// 

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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-sagartmg2.vercel.app/api/products/trending"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  // const productList = [
  //   {
  //     title: "Cantilever chair",
  //     image: (
  //       <img
  //         src={image1}
  //         alt="Cantilever chair"
  //         className="w-[178px] h-[178px]"
  //       />
  //     ),
  //     colors: <img src={colors} alt="Cantilever chair" />,
  //     Code: "Y523201",
  //     price: "$42.00",
  //     button: "View Details",
  //   },
  //   {
  //     title: "Cantilever chair",
  //     image: (
  //       <img
  //         src={image2}
  //         alt="Cantilever chair"
  //         className="w-[178px] h-[178px]"
  //       />
  //     ),
  //     colors: <img src={colors} alt="Cantilever chair" />,
  //     Code: "Y523201",
  //     price: "$42.00",
  //     button: "View Details",
  //   },
  //   {
  //     title: "Cantilever chair",
  //     image: (
  //       <img
  //         src={image3}
  //         alt="Cantilever chair"
  //         className="w-[178px] h-[178px]"
  //       />
  //     ),
  //     colors: <img src={colors} alt="Cantilever chair" />,
  //     Code: "Y523201",
  //     price: "$42.00",
  //     button: "View Details",
  //   },
  //   {
  //     title: "Cantilever chair",
  //     image: (
  //       <img
  //         src={image4}
  //         alt="Cantilever chair"
  //         className="w-[178px] h-[178px]"
  //       />
  //     ),
  //     colors: ,
  //     Code: "Y523201",
  //     price: "$42.00",
  //     button: "View Details",
  //   },
  // ];
  return (
    <div className="w-full flex justify-center">
      <div className="slider-container container xl:pt-[160px] lg:pb-[126px] pt-[96px] sm:pb-[96px] ">
      <Slider {...settings}>
  {/* Check if products have been fetched and data exists */}
  {products.length > 0 && (
    products.data.map((product) => (
      <div key={product._id} className=" !flex !justify-center  ">
        <div
          key={product._id}
          className="!w-[270px]  h-[361px] shadow-xl shadow-slate-100 mb-[1px] hover:bg-primary-dark1 group cursor-pointer hover:translate-y-[-10px] transition-transform duration-300"
        >
          <div className="h-full flex flex-col justify-between group-hover:translate-y-[-10px] transition-transform duration-300 relative">
            <div className="w-[275px] h-[240px] flex justify-center items-center bg-[#f6f7fb]">
              <div className="hidden  hover:flex absolute top-0 left-2 gap-2 mt-8"></div>
              <div className="mb-4 "><img src={product.image} alt={product.name} /></div>
            </div>
            <div className="p-4 flex flex-col items-center gap-2 group-hover:text-[#fff]">
              <div className="text-center text-secondary font-[Lato] font-bold text-[18px] group-hover:text-[#fff]">
                {product.name}
              </div>
              {/* <div>{product.colors}</div> */}
              <div className="text-primary-dark font-[Josefin Sans] text-[14px] group-hover:text-[#fff]">
                Code - {product.count}
              </div>
              <div className="text-primary-dark font-[Lato] text-[14px] group-hover:text-[#fff]">
                {product.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</Slider>
      </div>
    </div>
  );
};

export default TopProducts;
