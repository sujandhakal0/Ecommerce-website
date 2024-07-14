import React from "react";
import Header from "../../components/Header/Header";
import ImageSection from "../../components/ImageSection/ImageSection";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <ImageSection />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
