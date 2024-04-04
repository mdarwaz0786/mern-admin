import express from "express";
import { fetchAllData } from "../controllers/allDataController.js";

// router object
const router = express.Router();

// routes
router.get("/all-data", fetchAllData);

export default router;