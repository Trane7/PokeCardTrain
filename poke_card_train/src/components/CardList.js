import React, { useState } from 'react';
import Card from './Card';
import Checkout from './Checkout';

const CardList = () => {
  const [cart, setCart] = useState([]);

  const cards = [
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
    { 
      name: "Mew", 
      description: "Psychic type Pokémon", 
      price: 5.99, 
      image: "./images/mew.jpg" 
    },
  ];

  const addToCart = (card) => {
    setCart([...cart, card]);
  };

  return (
    <div>
      <h2>Shop Pokémon Products</h2>
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
