import express from "express";
import { createProduct, deleteProduct, fetchAllProduct, fetchAllProducts, fetchSingleProduct, updateProduct } from "../controllers/productController.js";

// router object
const router = express.Router();

// routes
router.post("/create-product", createProduct);
router.get("/all-products", fetchAllProducts);
router.get("/all-product", fetchAllProduct);
router.get("/single-product/:id", fetchSingleProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);


export default router;