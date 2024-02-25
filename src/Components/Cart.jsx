import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length !== 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;