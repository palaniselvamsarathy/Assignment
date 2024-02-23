import React, { useState, useEffect } from 'react';

const Product = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = (productId) => {
    console.log(`Product added to cart`);
    // Implement your logic to add the product to the cart state
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left side: Product Image */}
        <div className="col-md-6">
          <img src={product.image} className="img-fluid pro-det-image" alt={product.title} />
        </div>
        {/* Right side: Product Details */}
        <div className="col-md-6 mt-5" >
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p className='desc'>{product.description}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};



export default Product;


