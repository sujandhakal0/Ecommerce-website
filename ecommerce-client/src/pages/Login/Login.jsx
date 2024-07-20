import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import loginImage from "./images/loginImage.png";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setReduxUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const proceedLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const loginData = {
          email,
          password,
        };

        const response = await axios.post(
          "https://ecommerce-sagartmg2.vercel.app/api/users/login",
          loginData
        );

        toast.success("Login successful!");
        navigate("/");

        dispatch(setReduxUser(response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } catch (error) {
        toast.error(`Login failed due to: ${error.message}`);
      }
    }
  };

  const validate = () => {
    let results = true;
    if (email === "" || email === null) {
      toast.warning("Please enter Email Address");
      results = false;
    }
    if (password === "" || password === null) {
      toast.warning("Please enter your Password");
      results = false;
    }
    return results;
  };
  return (
    <div>
      <div className="w-full  flex justify-center bg-[#f6f5ff] py-[98px]">
        <div className="container  flex flex-col gap-2">
          <div className="font-['Josefin_Sans'] font-bold text-[36px] text-[#101750]">
            My Account
          </div>
          <div className="text-base ">
            Home.Pages.
            <span className="text-secondary font-[500]">My Account</span>
          </div>
        </div>
      </div>

      {/* // Login  */}

      <div className="w-full flex flex-col items-center md:gap-[110px] sm:my-[100px] my-10">
        <div className="container flex flex-col items-center gap-4 rounded-md sm:shadow-md w-[544px] h-[420px] md:h-[474px] sm:py-[50px] md:px-[55px]">
          <div className=" flex flex-col items-center gap-2">
            <header className=" font-[Josefin Sans] font-bold text-[32px]">
              Login
            </header>
            <p className="font-[lato] text-[17px] text-[#9ea3bb]">
              Please login using account detail bellow.
            </p>
          </div>
          <form
            onSubmit={proceedLogin}
            className="w-full flex flex-col items-center"
          >
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <Link
                to="#"
                className="font-[lato] text-[17px] text-[#9ea3bb] w-[366px] ml-3"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-secondary text-white text-[17px] w-[366px] h-[44px] rounded hover:bg-[#f14dfa]"
              >
                <Link>Sign In</Link>
              </button>
            </div>
            <div className="mb-4">
              <p className="font-[lato] text-[17px] text-[#9ea3bb] hover:underline">
                <Link to="/signup">Don't have an Account? Create account</Link>
              </p>
            </div>
          </form>
        </div>

        <div className="hidden md:block">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
