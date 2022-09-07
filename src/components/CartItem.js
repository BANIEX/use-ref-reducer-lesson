import React from "react";
import { useCity } from "../context";

const CartItem = ({ item }) => {
  const { image, price, title, amount, id } = item;
  const { handleAddToCart, removeFromCart } = useCity();

  return (
    <div className="p-4">
      <div>
        <h4 className="text-2xl">{title}</h4>
        <p className="text-xl">${price}</p>
      </div>
      <div>
        <img src={image} alt="" width="50" />
      </div>
      <button
        className="text-4xl bg-orange-600 text-lime-200 w-10"
        onClick={() => removeFromCart(id)}
      >
        -
      </button>

      <p>{amount}</p>
      <button
        className="text-4xl bg-orange-600 text-lime-200 w-10"
        onClick={() => handleAddToCart(item)}
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
