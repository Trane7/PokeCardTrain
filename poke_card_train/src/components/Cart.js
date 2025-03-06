import React, { useState } from 'react';
import Checkout from './Checkout';

const Cart = () => {
  const [cart, setCart] = useState([
    { 
      name: "Pikachu", 
      description: "Electric type Pokémon", 
      price: 5.99, 
      image: "/images/pikachu.png" 
    },
    { 
      name: "Charizard", 
      description: "Fire type Pokémon", 
      price: 15.99, 
      image: "/images/charizard.png" 
    },
  ]);  // Example cart data

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <Checkout cart={cart} />
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Cart;
