import React from "react";
import { useCity } from "../context";
const Item = ({ item }) => {
  const { handleAddToCart } = useCity();
  const { category, description, image, price, title } = item;
  return (
    <article className="bg-white flex flex-col mb-8 shadow w-96 p-6 hover:shadow-lg transition-all">
      <img src={image} alt="" width="100" className="mb-6" />
      <h4 className="text-3xl mb-6 capitalize">{title}</h4>
      <div>
        <h4 className="text-2xl capitalize mb-6">{category}</h4>
        <p className="text-xl text-gray-700 mb-2">{description}</p>
        <p className="mb-2 text-2xl font-bold">${price}</p>
      </div>
      <button
        className="bg-blue-800 text-white p-2 shadow-md text-xl rounded-md"
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </button>
    </article>
  );
};

export default Item;
