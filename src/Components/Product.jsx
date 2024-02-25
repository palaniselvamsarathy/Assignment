import React, { useState, useEffect } from 'react';

const Product = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch product details based on productId
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  const addToCart = (productId) => {
    // Check if the product is already in the cart
    const productInCart = cart.find(item => item.id === productId);

    if (productInCart) {
      // If the product is already in the cart, increase its quantity
      const updatedCart = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { id: productId, quantity: 1 }]);
    }

    console.log(`Product added to cart`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-md-6">
          <img src={product.image} className="img-fluid pro-det-image" alt={product.title} />
        </div>

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
