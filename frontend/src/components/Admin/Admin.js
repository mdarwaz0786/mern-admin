import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link, Outlet } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { FaFirstOrder } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaSlidersH } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import axios from 'axios';


const Dashboard = () => {
  const [allProductData, setAllProductData] = useState([]);
  const [allUserData, setAllUserData] = useState([]);
  const [allContactEnquiryData, setAllContactEnquiryData] = useState([]);


  const fetchAllData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/all-data");
      setAllProductData(response.data.products);
      setAllUserData(response.data.users);
      setAllContactEnquiryData(response.data.contactEnquiry);
    } catch (error) {
      console.log("Error while fetching all data", error);
    };
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      {/* dashboard navbar start */}
      <div className="dashboard">
        <div>
          <p className="text-white fs-6 m-lg-3" style={{ fontWeight: "600" }}>Baby Mania</p>
        </div>
        <div>
          <div className="dropdown">
            <button className="btn text-white dropdown-toggle border-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admin
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Edit Profile</Link></li>
              <li><Link className="dropdown-item" to="/login">Log Out</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* dashboard navbar end */}

      {/* dashboard container start */}
      <div className="dashboard-container">
        {/* dashboard sidebar start */}
        <div className="dashboard-sidebar text-white">
          <p style={{ width: "12rem", height: "2rem", background: "#4b4949" }}></p>
          <div className="d-flex gap-2 m-lg-3">
            <p style={{ color: "#c4c4c4", fontSize: "0.8rem" }}>Admin Panel</p>
          </div>
          <div className="d-flex gap-2 m-lg-3">
            <AiFillDashboard />
            <Link className="text-decoration-none text-white" to="/admin"><p>Dashboard</p></Link>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <IoIosSettings />
            <p>Site Setting</p>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <FaFirstOrder />
            <p>Orders</p>
            <span className="badge text-bg-secondary">3</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <BiCategoryAlt />
            <p>Categories</p>
            <span className="badge text-bg-secondary">4</span>
          </div>

          <div className="dropdown d-flex gap-2">
            <button className="btn bg-black dropdown-toggle text-white d-flex gap-2 btn-outline-dark border-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <FaProductHunt />
              <p>Products</p>
              <span className="badge text-bg-secondary">{allProductData}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/admin/all-product">All Product</Link></li>
              <li><Link className="dropdown-item" to="/admin/add-product">Add product</Link></li>
            </ul>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><IoIosColorPalette /></p>
            <p>Colors</p>
            <span className="badge text-bg-secondary">27</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><MdPhotoSizeSelectActual /></p>
            <p>Size</p>
            <span className="badge text-bg-secondary">20</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><RiCoupon3Fill /></p>
            <p>Coupon</p>
            <span className="badge text-bg-secondary">2</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><FaSlidersH /></p>
            <p>Slider</p>
            <span className="badge text-bg-secondary">4</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><BiSolidOffer /></p>
            <p>All Offer banner</p>
            <span className="badge text-bg-secondary">3</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><MdReviews /></p>
            <p>Testimonials</p>
            <span className="badge text-bg-secondary">7</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><FaRegUser /></p>
            <Link to="/admin/all-user" className="text-decoration-none text-white"><p>Registration</p></Link>
            <span className="badge text-bg-secondary">{allUserData}</span>
          </div>

          <div className="d-flex gap-2 m-lg-3">
            <p><IoMdContact /></p>
            <Link to="/admin/contact-enquiry" className="text-decoration-none text-white"><p>Contact Enquiry</p></Link>
            <span className="badge text-bg-secondary">{allContactEnquiryData}</span>
          </div>
        </div>
        {/* dashboard sidebar end */}

        {/* dashboard card container start */}
        <div>
          <Outlet />
        </div>
        {/* dashboard container end */}
      </div>
    </>
  );
};

export default Dashboard;
