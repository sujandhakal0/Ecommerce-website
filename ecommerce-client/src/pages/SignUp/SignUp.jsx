import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginImage from "./images/loginImage.png";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";

    if (name === null || name === "") {
      isproceed = false;
      errormessage += "Full name";
    }

    if (email === null || email === "") {
      isproceed = false;
      errormessage += "Email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += "Password";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const regObj = { name, email, password };
    if (IsValidate()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/user",
          regObj,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        toast.success("Sign up successful!");
        // console.log(response.data);
        navigate("/login");
      } catch (error) {
        toast.error(`Sign up failed. Please try again. (${error.message})`);
        // console.error(error);
      }
    }
  };

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
            <span className="text-secondary font-[500]">My Account</span>
          </div>
        </div>
      </div>

      {/* // Login  */}

      <div className="w-full flex flex-col items-center md:gap-[110px] sm:my-[100px] my-10">
        <div className="container flex flex-col items-center gap-4 rounded-md sm:shadow-md w-[544px]   sm:py-[50px] md:px-[55px]">
          <div className=" flex flex-col items-center gap-2">
            <header className=" font-[Josefin Sans] font-bold text-[32px]">
              Sign Up
            </header>
            <p className="font-[lato] text-[17px] text-[#9ea3bb]">
              Fill in the form below to create a new account.
            </p>
          </div>
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Name"
                // required
              />
            </div>
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Email Address"
                // required
              />
            </div>
            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Password"
                // required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-secondary text-white text-[17px] w-[366px] h-[44px] rounded hover:bg-[#f14dfa] "
              >
                Sign UP
              </button>
            </div>
            <div className="mb-4">
              <p className="font-[lato] text-[17px] text-[#9ea3bb]">
                <Link to="/login">Already have an account? Sign in here</Link>
              </p>
            </div>
          </form>
        </div>

        <div className="hidden md:block">
          <img src={loginImage} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
