import React from 'react';
import { BroweserRouter as Router, Route, Routes } from 'react-router-dom';  // Correct imports
import Header from './components/Header';
import Home from './components/Home';  // Import Home page
import Cart from './components/Cart';  // Import Cart page
import Checkout from './components/Checkout';  // Import Checkout page
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />  {/* Home Page Route */}
          <Route path="/cart" element={<Cart />} />  {/* Cart Page Route */}
          <Route path="/checkout" element={<Checkout />} />  {/* Checkout Page Route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
