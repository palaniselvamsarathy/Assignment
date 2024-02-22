import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + '...';
  } else {
    return title;
  }
}

const Home = () => {
    const [products, setProducts] = useState([]);
  
useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
}, []); 
  
const addToCart = (productId) => {
      console.log(`Product added to cart`);
      // Implement your logic to add the product to the cart state
};

return (
    <div className="container mt-5">
      <h2 className='text-center mt-5'>Products</h2>
      <div className="row mt-2">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top mx-auto d-block pro-image" alt={product.title}  />
              <div className="card-body">
                <h5 className="card-title">{truncateTitle(product.title, 30)}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </button>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  )
}

export default Home
