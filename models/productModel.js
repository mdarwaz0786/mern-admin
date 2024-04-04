import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Show", "Hide"],
    },
    rating: {
      type: Number,
    },
    brand: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Products", productSchema);  