import ContactEnquiry from "../models/contactEnquiryModel.js";

// controller to create contact enquiry
export const createContactEnquiry = async (req, res) => {
  try {
    const contactEnquiry = new ContactEnquiry(req.body);
    const savedContactEnquiry = await contactEnquiry.save();
    res.status(201).json({ success: true, message: "Contact enquiry created successful", savedContactEnquiry });
  } catch (error) {
    console.log("Error while creating contact enquiry", error);
    res.status(500).json({ success: false, message: "Error while creating contact enquiry" });
  };
};

// controller to fetch all contact enquiry
export const fetchAllContactEnquiry = async (req, res) => {
  try {
    const contactEnquiry = await ContactEnquiry.find();
    res.status(200).json({ success: true, messsage: "Contact enquiry fetched successfully", contactEnquiry });
  } catch (error) {
    console.log("Error while fetching all contact enquiry", error);
    res.status(500).json({ success: false, message: "Error while fetching all contact enquiry" });
  };
};


// controller to fetch single conatct enquiry
export const fetchSingleContactEnquiry = async (req, res) => {
  try {
    const contactEnquiryId = req.params.id;
    const contactEnquiry = await ContactEnquiry.findById(contactEnquiryId);
    if (!contactEnquiry) {
      return res.status(404).json({ success: false, message: "Contact enquiry not found" });
    };
    res.status(200).json({ success: true, message: "single contact enquiry fetched successfully", contactEnquiry });
  } catch (error) {
    console.log("Error while fetching single contact enquiry", error);
    res.status(500).json({ success: false, message: "Error while fetching single contact enquiry" })
  };
};

// controller to delete contact enquiry
export const deleteContactEnquiry = async (req, res) => {
  try {
    const contactEnquiryId = req.params.id;
    const deletedContactEnquiry = await ContactEnquiry.findByIdAndDelete(contactEnquiryId);
    if (!deletedContactEnquiry) {
      return res.status(400).json({ success: false, message: "Contact enquiry not fount" })
    };
    res.status(200).json({ success: true, message: "Contact enquiry deleted successfully", deletedContactEnquiry });
  } catch (error) {
    console.log(error);
  };
};