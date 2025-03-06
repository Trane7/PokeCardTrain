import React, { useState } from 'react';
import Card from './Card';
import Checkout from './Checkout';

const CardList = () => {
  const [cart, setCart] = useState([]);

  const cards = [
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
    { 
      name: "Bulbasaur", 
      description: "Grass type Pokémon", 
      price: 8.99, 
      image: "/images/bulbasaur.png" 
    },
  ];

  const addToCart = (card) => {
    setCart([...cart, card]);
  };

  return (
    <div>
      <h3>Shop Pokémon Cards</h3>
      <div className="card-list">
        {cards.map(card => (
          <Card key={card.name} card={card} addToCart={addToCart} />
        ))}
      </div>
      {cart.length > 0 && <Checkout cart={cart} />}
    </div>
  );
}

export default CardList;
