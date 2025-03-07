import React from 'react';

const Checkout = ({ cart }) => {
  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Your Order</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} width="100" />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
