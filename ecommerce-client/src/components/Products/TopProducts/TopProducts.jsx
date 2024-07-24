import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "./images/img.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../redux/slices/cartSlice";

const TopProducts = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addCartItems(product))
     
  };
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
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const [productsGrid, setProductsGrid] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProductsGrid(response.data.products.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="container bg-[#ffffff]">
        <div className="slider-container container xl:pt-[160px] lg:pb-[126px] pt-[96px] sm:pb-[96px] ">
          {products.length === 0 ? (
            <div>Loading Products...</div>
          ) : (
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id} className=" !flex !justify-center ">
                  <div
                    key={product.id}
                    className="!w-[270px]  h-[361px] shadow-xl shadow-slate-100 mb-[1px] hover:bg-primary-dark1 group cursor-pointer hover:translate-y-[-10px] transition-transform duration-300"
                  >
                    <div className="h-full flex flex-col justify-between group-hover:translate-y-[-10px] transition-transform duration-300 relative">
                      <div className="w-[275px] h-[240px] flex justify-center items-center bg-[#f6f7fb]">
                        {/* Product image */}
                        <div className="mb-4 relative">
                          <img
                            className="w-[178px] h-[178px]"
                            src={product.images[0]}
                            alt={product.title}
                          />
                          {/* Add to cart button */}
                          <button
                            className="bg-primary-light text-white text-[12px]  px-4 h-[29px]  bg-[#08D15F]  flex justify-center items-center absolute right-11 hover:bg-[#FB4997]  "
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col items-center gap-2 group-hover:text-[#fff] h-[125px] ">
                        {/* Product title, category, and price */}
                        <div className="text-center text-secondary font-[Lato] font-bold text-[18px] group-hover:text-[#fff]">
                          {product.title}
                        </div>
                        <div className="text-primary-dark font-['Josefin_Sans'] text-[14px] group-hover:text-[#fff]">
                          {product.category}
                        </div>
                        <div className="text-primary-dark font-[Lato] text-[14px] group-hover:text-[#fff]">
                          ${product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-[100px] sm:mt-[60px] mb-[60px]">
          <div className="mb-[58px] flex flex-col items-center w-full ">
            <div className="font-bold text-[42px] font-['Josefin_Sans'] text-[#151875] mb-2">
              Leatest Products
            </div>
            <div className="">
              <ul className="flex text-[#151875] text-[18px] sm:gap-14 gap-2 cursor-pointer">
                <li className="hover:text-[#FB4997] hover:underline">
                  New Arrival
                </li>
                <li className="hover:text-[#FB4997] hover:underline">
                  Best Seller
                </li>
                <li className="hover:text-[#FB4997] hover:underline">
                  Featured
                </li>
                <li className="hover:text-[#FB4997] hover:underline">
                  Special offer
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container cursor-pointer">
            {productsGrid.map((productGrid) => (
              <div key={productGrid.id} className="flex gap-3">
                <div className="bg-white shadow-lg w-[360px] h-[301px] hover:shadow-xl">
                  <div className="flex justify-center">
                    <img
                      className="h-[229px] w-[223px]"
                      src={productGrid.images[0]}
                      alt={productGrid.title}
                    />
                    <button
                      className="bg-primary-light text-white text-[12px]  px-4 h-[29px]  bg-[#08D15F]  flex justify-center items-center  hover:bg-[#FB4997] "
                      onClick={() => handleAddToCart(productGrid)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="flex justify-between pt-1 px-2 text-base text-[#151875] mt-6 hover:text-[#FB4997] ">
                    <p className="border-b-2 border-[#eeeffb]">
                      {productGrid.title}
                    </p>
                    <div className="">
                      <p className="">${productGrid.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
        ......... */}
        <div className="text-block flex flex-col justify-center items-center mb-[60px]">
          <div className="font-bold text-[42px] font-['Josefin_Sans'] text-[#151875] ">
            What shopex offer !
          </div>
          <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="box p-4 rounded shadow-md w-full md:w-[270px] h-[320px] flex flex-col items-center justify-center gap-4">
              <img src={img} alt="" />
              <h2 className="text-[22px] font-bold mb-2 text-[#151875]">
                24/7 Support
              </h2>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="box p-4 rounded shadow-md w-full md:w-[270px] h-[320px] flex flex-col items-center justify-center gap-4">
              <img src={img1} alt="" />
              <h2 className="text-[22px] font-bold mb-2 text-[#151875]">
                24/7 Support
              </h2>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="box p-4 rounded shadow-md w-full md:w-[270px] h-[320px] flex flex-col items-center justify-center gap-4">
              <img src={img2} alt="" />
              <h2 className="text-[22px] font-bold mb-2 text-[#151875]">
                24/7 Support
              </h2>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="box p-4 rounded shadow-md w-full md:w-[270px] h-[320px] flex flex-col items-center justify-center gap-4">
              <img src={img3} alt="" />
              <h2 className="text-[22px] font-bold mb-2 text-[#151875]">
                24/7 Support
              </h2>
              <p className="text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
        {/* .......... */}
      </div>
    </div>
  );
};

export default TopProducts;
