import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", { email, password });
      if (response.data.success) {
        setEmail("");
        setPassword("");
        setMessage(response.data.message);
        alert("login successful");
        navigate('/admin');
      } else {
        setMessage(response.data.message);
      };
    } catch (error) {
      console.log("Error while login user", error);
      setMessage("Error while login user");
    };
  };

  return (
    <>
      <div className="container custom-container">
        <form style={{ width: 400 }} onSubmit={handleSubmit}>
          <h3 className="mb-4 text-center">Login Form</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
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

export default Login;
