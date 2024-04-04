import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import CartPage from './pages/CartPage.js';
import Admin from "./components/Admin/Admin.js";
import Dashboard from "./components/Admin/Dashboard.js";
import AddProduct from "./components/Admin/AddProduct.js";
import AllProduct from "./components/Admin/AllProduct.js";
import AllUser from "./components/Admin/AllUser.js";
import ContactEnquiry from "./components/Admin/ContactEnquiry.js";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="all-product" element={<AllProduct />} />
          <Route path="all-user" element={<AllUser />} />
          <Route path="contact-enquiry" element={<ContactEnquiry />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
