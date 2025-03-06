import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="Pokémon Card Shop Logo" className="logo" />
      <h2>Pokémon Card Shop</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>    {/* Home Page Link */}
          <li><Link to="/cart">Cart</Link></li>  {/* Cart Page Link */}
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
