import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ContactUs from './pages/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <ContactUs />
      </>
    ),
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;