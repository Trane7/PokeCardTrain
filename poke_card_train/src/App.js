import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Correct imports
import './App.css';
import Header from './components/Header';
import Home from './components/Home';  // Import Home page
import Cart from './components/Cart';  // Import Cart page
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />  {/* Use element prop */}
          <Route path="/cart" element={<Cart />} />  {/* Use element prop */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
