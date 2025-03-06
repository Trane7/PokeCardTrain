import { useState } from "react";
import { ProductCard } from "@/components/ui/card";
import Checkout from "@/components/Checkout";

const cards = [
  { id: 1, name: "Charizard", price: 25, image: "/charizard.jpg" },
  { id: 2, name: "Pikachu", price: 15, image: "/pikachu.jpg" },
  { id: 3, name: "Blastoise", price: 20, image: "/blastoise.jpg" },
  { id: 4, name: "Venusaur", price: 18, image: "/venusaur.jpg" },
  { id: 5, name: "Mewtwo", price: 30, image: "/mewtwo.jpg" },
];

export default function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (card) => {
    setCart([...cart, card]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokémon Card Store</h1>
      <div className="grid grid-cols-5 gap-4">
        {cards.map((card) => (
          <ProductCard key={card.id} card={card} addToCart={addToCart} />
        ))}
      </div>
      <Checkout cart={cart} />
    </div>
  );
}
