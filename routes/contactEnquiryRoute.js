import express from "express";
import { createContactEnquiry, deleteContactEnquiry, fetchAllContactEnquiry, fetchSingleContactEnquiry } from "../controllers/contactEnquiryController.js";

// rest object
const router = express.Router();

// routes
router.post("/create-contactEnquiry", createContactEnquiry);
router.get("/all-contactEnquiry", fetchAllContactEnquiry);
router.get("/single-contactEnquiry/:id", fetchSingleContactEnquiry);
router.delete("/delete-contactEnquiry/:id", deleteContactEnquiry);

export default router;