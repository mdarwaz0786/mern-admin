import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import Cart from "../components/Cart/Cart.js";

const cartPage = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Footer />
    </>
  );
};

export default cartPage;
