/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactEnquiry = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const fetchContactEnquiry = async () => {
    try {
      const response = await axios.get("http://localhost:8080/all-contactEnquiry");
      setContacts(response.data.contactEnquiry);
    } catch (error) {
      console.log("Error while fetching contact enquiry", error);
    };
  };

  const fetchSingleContactEnquiry = async (contactId) => {
    try {
      const response = await axios.get(`http://localhost:8080/single-contactEnquiry/${contactId}`);
      setName(response.data.contactEnquiry.name);
      setEmail(response.data.contactEnquiry.email);
      setMobile(response.data.contactEnquiry.mobile);
      setSubject(response.data.contactEnquiry.subject);
      setMessage(response.data.contactEnquiry.message);
    } catch (error) {
      console.log("Error while fetching single contact enquiry", error);
    };
  };

  const handleDeleteContactEnquiry = async (contactId) => {
    try {
      await axios.delete(`http://localhost:8080/delete-contactEnquiry/${contactId}`);
      fetchContactEnquiry();
    } catch (error) {
      console.log("Error while deleting contact enquiry", error);
    };
  };

  useEffect(() => {
    fetchContactEnquiry();
  }, []);

  return (
    <>
      <div style={{ width: "82vw", marginLeft: "1rem" }}>
        <div className="dashboard-heading mt-1 d-flex justify-content-between">
          <h4>Contact List</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" className="text-black">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact List</li>
            </ol>
          </nav>
        </div>

        <div className="card w-100 d-flex justify-content-center align-items-center">
          <h5 className="card-header">Contact List</h5>
          <div className="card-body">
            <table className="table" style={{ width: "80vw", marginLeft: "1rem" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Subject</th>
                  <th className="px-5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.mobile}</td>
                      <td>{contact.subject}</td>
                      <td>
                        <button className="btn btn-sm btn-danger m-3" onClick={() => handleDeleteContactEnquiry(contact._id)}>Delete</button>
                        <button className="btn btn-sm btn-primary" onClick={() => { setShowModal(true); fetchSingleContactEnquiry(contact._id) }}>View</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

        {
          showModal &&
          <div className="mb-5">
            <div className="d-flex justify-content-between mt-3">
              <h5>View Contact</h5>
              <button type="button" className="btn btn-primary d-flexaccordion-flush" onClick={() => { setShowModal(false) }}>close</button>
            </div>
            <div className="mt-1">
              <form className="form-control">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={name} name="name" disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} name="email" disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input type="number" className="form-control" id="mobile" value={mobile} name="mobile" disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="rating" value={subject} name="subject" disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea type="text" className="form-control" id="message" value={message} name="message" cols="30" rows="10" disabled></textarea>
                </div>
              </form>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default ContactEnquiry;
