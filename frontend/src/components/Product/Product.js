import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/all-products");
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error while fetching products', error);
      };
    };
    fetchData();
  }, []);


  return (
    <div className="container mt-5">
      <h2 className='text-center'>All Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          products.map((product, index) => (
            <div key={product._id} className="col mb-4">
              <div className="card h-100">
                <img src={product?.image} className="card-img-top img-fluid" alt={product.title} style={{ height: "200px" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <h6 className="card-title">{product.brand}</h6>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Rating: {product.rating}</p>
                  <p className="card-text">Staus: {product.status}</p>
                  <button className='btn btn-primary'>Add To Cart</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;



