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
  const [role, setRole] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    // Validate form data before submitting

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Update errors state with validation results
      return; // Prevent form submission if errors exist
    }

    try {
      axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name,
        email,
        password,
        role,
      });

      // Handle successful signup
      toast.success("Sign up successful!");
      navigate("/login");
    } catch (error) {
      // Handle signup errors
      toast.error(`Sign up failed. Please try again. (${error.message})`);
    }
  };

  const validate = () => {
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Please enter your full name.";
    }

    if (!email) {
      validationErrors.email = "Please enter your email address.";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      validationErrors.password = "Please enter your password.";
    }

    if (!role) {
      validationErrors.role = "Please select your role.";
    }

    return validationErrors;
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
                name="name"
                value={name}
                type="text"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>} {/* Display error message below input */}
            </div>
            <div className="mb-4">
              <input
                name="email"
                value={email}
                type="text"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <input
                name="password"
                value={password}
                type="password"
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <select
                name="role"
                value={role}
                className="border-[#e7e6ef] border-solid border-2 w-[366px] h-[44px] px-4 rounded"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select your role</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
              <p className="font-[lato] text-[17px] text-[#9ea3bb] hover:underline">
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
