import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate
import Checkout from './Checkout';  // Import Checkout component

const Cart = () => {
  const [cart, setCart] = React.useState([
    { 
      name: "Pikachu", 
      description: "Electric type Pokémon", 
      price: 5.99, 
      image: "/images/pikachu.png" 
    },
  ]);  // Example cart data

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <Checkout cart={cart} />
          <Link to="/checkout">
            <button>Proceed to Checkout</button> {/* Button to navigate to Checkout */}
          </Link>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Cart;
