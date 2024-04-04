import Product from "../models/productModel.js";

// controller to create product - Admin
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json({ success: true, message: "product created successfully", savedProduct });
  } catch (error) {
    console.log("Error while creating product", error);
    res.status(500).json({ success: false, message: "Error while creating product" });
  };
};

// controller to fetch all product
export const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ status: "Show" });
    res.status(200).json({ success: true, messsage: "product fetched successfully", products });
  } catch (error) {
    console.log("Error while fetching products", error);
    res.status(500).json({ success: false, message: "Error while fetching all products" });
  };
};

export const fetchAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, messsage: "product fetched successfully", products });
  } catch (error) {
    console.log("Error while fetching products", error);
    res.status(500).json({ success: false, message: "Error while fetching all products" });
  };
};

// controller to fetch single product
export const fetchSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product && product.data.status != "Show") {
      return res.status(404).json({ success: false, message: "Product not found" });
    };
    res.status(200).json({ success: true, message: "single product fetched successfully", product });
  } catch (error) {
    console.log("Error while fetching single product", error);
  };
};

// controller to update product - Admin
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    };
    res.status(200).json({ success: true, message: "product updated successfully", updatedProduct });
  } catch (error) {
    console.log("Error while updating product", error);
    res.status(500).json({ success: false, message: "Error while updating product" });
  };
};

// controller to delete product - Admin
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(400).json({ success: false, message: "Product not found" });
    };
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error while deleting product", error);
    res.status(500).json({ success: false, message: "Error while deleting product" });
  };
};




