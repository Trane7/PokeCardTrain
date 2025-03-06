import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="Pokémon Card Shop Logo" className="logo" />
      <h2>Pokémon Card Shop</h2>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;