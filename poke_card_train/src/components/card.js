import { Card, CardContent } from "@/components/ui/card";

export const ProductCard = ({ card, addToCart }) => (
  <Card className="p-4">
    <CardContent>
      <img src={card.image} alt={card.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{card.name}</h2>
      <p className="text-gray-600">${card.price}</p>
      <Button className="mt-2 w-full" onClick={() => addToCart(card)}>
        Add to Cart
      </Button>
    </CardContent>
  </Card>
);

// This is the desgin of the cards that the merch is going to be on display