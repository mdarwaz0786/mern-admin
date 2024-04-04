import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import ContactEnquiry from "../models/contactEnquiryModel.js";

// controller to get all data
export const fetchAllData = async (req, res) => {
  try {
    const products = (await Product.find()).length;
    const users = (await User.find()).length;
    const contactEnquiry = (await ContactEnquiry.find()).length
    res.status(200).json({ success: true, message: "All data fetched successfully", products, users, contactEnquiry });
  } catch (error) {
    console.log(error)
  };
};