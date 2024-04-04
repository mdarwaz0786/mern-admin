import express from "express";
import { deleteUser, fetchUser, loginUser, registerUser } from "../controllers/userController.js";

// router object
const router = express.Router();

// routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all-users", fetchUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
