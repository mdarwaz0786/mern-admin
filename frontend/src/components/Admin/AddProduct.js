import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/create-product", { title, description, price, rating, brand, image, status });
      if (response.data.success) {
        setMessage(response.data.message);
        setTitle("");
        setDescription("");
        setPrice("");
        setRating("");
        setBrand("");
        setImage("");
        setStatus("");
      } else {
        setMessage(response.data.message);
      };
    } catch (error) {
      console.log("Error while adding product", error);
      setMessage("Error while adding product");
    };
  };


  return (
    <div style={{ width: "80vw", marginLeft: "1rem" }}>
      <div className="dashboard-heading mt-1 d-flex justify-content-between">
        <h4>Add Product</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-black">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Add Product</li>
          </ol>
        </nav>
      </div>

      <div className="container mt-2">
        <div className="card">
          <h5 className="card-header text-center">Add Product</h5>
          <div className="card-body">
            <form onSubmit={handleAddProduct}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter title" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Enter description" />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter price" />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input type="number" className="form-control" id="rating" name="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} placeholder="Enter rating" />
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand</label>
                <input type="text" className="form-control" id="brand" name="brand" value={brand} onChange={(e) => { setBrand(e.target.value) }} placeholder="Enter brand" />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <input type="text" className="form-control" id="status" name="status" value={status} onChange={(e) => { setStatus(e.target.value) }} placeholder="Enter status" />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="text" className="form-control" id="image" name="image" value={image} onChange={(e) => { setImage(e.target.value) }} placeholder="Enter image url" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              {message && <p className="text-danger">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

