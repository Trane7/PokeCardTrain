import React from 'react';
import Card from './Card';

const CardList = () => {
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

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  );
}

export default CardList;