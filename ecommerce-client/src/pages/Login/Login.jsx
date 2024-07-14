import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import loginImage from "./images/loginImage.png";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="w-full  flex justify-center bg-[#f6f5ff] py-[98px]">
        <div className="container  flex flex-col gap-2">
          <div className="font-['Josefin_Sans'] font-bold text-[36px] text-[#101750]">
            My Account
          </div>
          <div className="text-base ">
            Home.Pages.
            <span className="text-[#FB2E86] font-[500]">My Account</span>
          </div>
        </div>
      </div>

      {/* // Login  */}

      <div className="w-full flex flex-col items-center md:gap-[110px] sm:my-[100px] my-10">
        <div className="container flex flex-col items-center gap-4 shadow-lg w-[544px] h-[420px] md:h-[474px] md:py-[50px] md:px-[55px]">
          <div className=" flex flex-col items-center gap-2">
            <header className=" font-[Josefin Sans] font-bold text-[32px]">
              Login
            </header>
            <p className="font-[lato] text-[17px] text-[#9ea3bb]">
              Please login using account detail bellow.
            </p>
          </div>
          <input
            type="text"
            className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
            placeholder="Password"
          />
          <Link
            to="#"
            className="font-[lato] text-[17px] text-[#9ea3bb] w-[366px] ml-3"
          >
            {" "}
            Forgot your password?
          </Link>
          <button className="bg-[#FB2E86] text-white text-[17px] w-[366px] h-[44px] rounded">
            <Link>Sign In</Link>
          </button>
          <p className="font-[lato] text-[17px] text-[#9ea3bb]">
            {" "}
            <Link>Don’t have an Account? Create account</Link>{" "}
          </p>
        </div>

        <div className="hidden md:block">
          <img src={loginImage} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
