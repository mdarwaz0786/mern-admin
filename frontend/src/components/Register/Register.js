import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", { fullName, email, password });
      if (response.data.success) {
        setMessage(response.data.message);
        setFullName("");
        setEmail("");
        setPassword("");
        alert("registration successful");
        navigate('/');
      } else {
        setMessage(response.data.message);
      };
    } catch (error) {
      console.log("Error while registering user", error);
      setMessage("Error while registering user");
    };
  };

  return (
    <>
      <div className="container custom-container">
        <form style={{ width: 400 }} onSubmit={handleSubmit}>
          <h3 className="mb-4 text-center">Registration Form</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your name" name="fullName" value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </div>
          {message && <p className="text-danger">{message}</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
