import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ContactUs from "./pages/ContactUs/ContactUs";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import RootLayout from "./components/RootLayout";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUser } from "./redux/slices/userSlice";
import Cart from "./pages/Cart/Cart";


function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = createBrowserRouter([
  
    {
      path: "",
      element: <RootLayout user={user} setUser={setUser} />,
      children: [
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
              <Login setUser={setUser} />
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
        {
          path: "/cart",
          element: (
            <>
              <Cart />
            </>
          ),
        },
      ],
    },
  ]);
  // let reduxUser = useSelector((store)=>store.user.value)
  useEffect(()=>{
    let reduxUser = localStorage.getItem("user")
    if(user){

      dispatch(setReduxUser(JSON.parse(reduxUser)))

      setIsLoading(false )
    }else{
      setIsLoading(false )
    }
  },[])
  if(isLoading){
    return <>
    loading...
    </>
  }

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
