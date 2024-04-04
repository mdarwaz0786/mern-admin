import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckBox from "./CheckBox.js";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/all-product");
      setProducts(response.data.products);
    } catch (error) {
      console.log('Error while fetching products', error);
    };
  };

  const fetchSingleProduct = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:8080/single-product/${productId}`);
      setProductId(productId);
      setTitle(response.data.product.title);
      setDescription(response.data.product.description);
      setPrice(response.data.product.price);
      setRating(response.data.product.rating);
      setBrand(response.data.product.brand);
      setImage(response.data.product.image);
      setStatus(response.data.product.status);
    } catch (error) {
      console.log("Error while fetching single product", error)
    };
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProduct = async (productId) => {
    try {
      await axios.put(`http://localhost:8080/update-product/${productId}`, { title, description, price, rating, brand, image, status });
      fetchProducts();
      alert("product edited successfully");
    } catch (error) {
      console.log(error);
    };
  };

  const updateProductStatus = async (productId, showStatus) => {
    try {
      await axios.put(`http://localhost:8080/update-product/${productId}`, { status: showStatus });
      fetchProducts();
    } catch (error) {
      console.log(error);
    };
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/delete-product/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error while deleting product', error);
    };
  };

  return (
    <div style={{ width: "82vw", marginLeft: "1rem" }}>
      <div className="dashboard-heading mt-1 d-flex justify-content-between">
        <h4>All Products</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-black">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">All Products</li>
          </ol>
        </nav>
      </div>

      <div className="card w-100 d-flex justify-content-center align-items-center">
        <h5 className="card-header">All Product</h5>
        <div className="card-body">
          <table className="table" style={{ width: "80vw", marginLeft: "1rem" }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Status</th>
                <th className="px-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.title}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                    <td><img style={{ width: "4rem", height: "2.5rem" }} src={product?.image} alt="productImage" /></td>
                    <td><span>{product.status} </span><CheckBox updateProductStatus={updateProductStatus} id={product._id} showStatus={product.status} /></td>
                    <td>
                      <button className="btn btn-sm btn-danger m-3" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                      <button className="btn btn-sm btn-primary" onClick={() => { setShowModal(true); fetchSingleProduct(product._id) }}>Edit</button>
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
            <h5>Edit Product</h5>
            <button type="button" className="btn btn-primary d-flexaccordion-flush" onClick={() => { setShowModal(false) }}>close</button>
          </div>
          <div className="mt-1">
            <form className="form-control">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" value={description} name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" value={price} name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input type="number" className="form-control" id="rating" value={rating} name="rating" onChange={(e) => setRating(e.target.value)} placeholder="Enter rating" />
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand</label>
                <input type="text" className="form-control" id="brand" value={brand} name="brand" onChange={(e) => setBrand(e.target.value)} placeholder="Enter brand" />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <input type="text" className="form-control" id="status" value={status} name="status" onChange={(e) => setStatus(e.target.value)} placeholder="Enter brand" />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="text" className="form-control" id="image" value={image} name="image" onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
              </div>
              <button type="button" className="btn btn-primary" onClick={() => { updateProduct(productId); setShowModal(false) }}>Submit</button>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default AllProduct;


