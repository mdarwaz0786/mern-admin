import User from "../models/userModel.js";

// controller to register user
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User with this email already exists" });
    };
    const newUser = new User({ fullName, email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully", newUser });
  } catch (error) {
    console.log("Error while registering user", error);
    res.status(500).json({ success: false, message: "Error while registering user" });
  };
};

// controller to login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    };
    if (password !== user.password) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    };
    res.status(200).json({ success: true, message: "Login successfully", user })
  } catch (error) {
    console.log("Error while logging in user", error);
    res.status(500).json({ success: false, message: "Error while logging user" });
  };
};

// controller to fetch all user - Admin
export const fetchUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, message: "User fetched successfully", users });
  } catch (error) {
    console.log("Error while fetching user", error);
    res.status(500).json({ success: false, message: "Error while fetching user" });
  };
};

// controller to delete user - Admin
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(400).json({ success: false, message: "User not found" });
    };
    res.status(200).json({ success: true, message: "User deleted Successfully", deletedUser });
  } catch (error) {
    console.log("Error while deleting user", error);
    res.status(500).json({ success: false, "message": "Error while deleting User" })
  };
};