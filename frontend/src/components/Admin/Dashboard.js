import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
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
      <div className="dashboard-heading">
        <h4 className="" style={{ marginTop: "1rem" }}>Dashboard</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-black">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
      </div>

      <div className="dashboard-card-container">
        <div className="dashboard-card">
          <p className="dashboard-card-p1">Site Setting</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">Site Setting</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Site Setting <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Categories</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">4</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Categories <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Products</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">{allProductData}</h4>
          <Link to="/admin/all-product" className="dashboard-card-bottom">Go To Products <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Offer Banners</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">8</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Offer Banners <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Deal of Days</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">1</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Deal of Days <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Single Banner</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">1</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Sigle Banner <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Testimonials</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">7</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Testimonials <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Coupon</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">2</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Coupon <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Slider</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">4</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Slider <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Orders</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">3</h4>
          <Link to="#" className="dashboard-card-bottom">Go To Orders <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Registration</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">{allUserData}</h4>
          <Link to="/admin/all-user" className="dashboard-card-bottom">Go To Registration <FaLongArrowAltRight /></Link>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-p1">Contact Enquiry</p>
          <h4 style={{ color: "white", marginLeft: "1rem", fontSize: "1.5rem" }} className="dashboard-card-p2">{allContactEnquiryData}</h4>
          <Link to="/admin/contact-enquiry" className="dashboard-card-bottom">Go To Contact Enquiry <FaLongArrowAltRight /></Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
