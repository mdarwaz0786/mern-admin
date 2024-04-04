import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import Product from "../components/Product/Product.js";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default HomePage;
