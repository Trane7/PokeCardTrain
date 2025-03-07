import React from 'react';
import CardList from './CardList';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Pokémon Card Shop</h1>
      <h2>How it works!</h2>
      <h4>Grab whatever product you want to buy and add it to your cart. Head to the cart section and proceed to checkout!</h4>
      <CardList />
    </div>
  );
}

export default Home;