import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Header = () => {
  return (
    <header>
      <img src="./images/pokeball.png" alt="Pokémon Card Shop Logo" className="logo" />
      <nav>
        <Link to="/">Home</Link>    {/* Home Page Link */}
        <Link to="/cart">Cart</Link> {/* Cart Page Link */}
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
