import { mongoose } from "mongoose";

const contactEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("ContactEnquiry", contactEnquirySchema);