import React from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to the Pokémon Card Shop</h1>
        <CardList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
