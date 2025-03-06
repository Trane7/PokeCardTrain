import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      <p>Price: ${card.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;

// This is the desgin of the cards that the merch is going to be on display