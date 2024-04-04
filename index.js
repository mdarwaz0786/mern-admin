import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./Database/connectDatabase.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import allDataRoute from "./routes/allDataRoute.js";
import contactEnquiryRoute from "./routes/contactEnquiryRoute.js";
import cors from "cors";

// config
dotenv.config();

// connect database
connectDatabase();

// rest object
const server = express();

// middleware
server.use(express.json());
server.use(cors());

// product route
server.use("/", productRoute);

// user route
server.use("/", userRoute);

// all data route
server.use("/", allDataRoute);

// contact enquiry route
server.use("/", contactEnquiryRoute);

// environment variable
const port = process.env.PORT || 5000;
const mode = process.env.Node_Mode;

// server listen
server.listen(port, () => {
  console.log(`server is successfully running in ${mode} on port number ${port}`);
}); 