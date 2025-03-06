import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Checkout Complete!');
    // Ideally, you would send this information to a server or process the payment here.
    setForm({ name: '', address: '', email: '' });
  };

  const totalAmount = cart.reduce((total, card) => total + card.price, 0).toFixed(2);

  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <div className="checkout-summary">
        <h4>Order Summary</h4>
        <ul>
          {cart.map((card, index) => (
            <li key={index}>{card.name} - ${card.price}</li>
          ))}
        </ul>
        <h5>Total: ${totalAmount}</h5>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <h4>Billing Information</h4>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
