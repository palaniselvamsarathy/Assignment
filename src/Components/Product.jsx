import React from 'react'

const Product = ({match}) => {
  const productId = match.params.id;

  // Fetch product details based on productId and display them

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Display other product details */}
    </div>
  );
}

export default Product

