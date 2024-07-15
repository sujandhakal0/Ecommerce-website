import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ContactUs from "./pages/ContactUs/ContactUs";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        {/* <ToastContainer>  */}
        <SignUp />
        {/* </ToastContainer> */}
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ContactUs />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
