import React from "react";
import { useCity } from "../context";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart, price } = useCity();
  return (
    <div>
      {cart.length === 0 ? (
        <div className="p-4">
          <h4 className="text-3xl font-bold font-sans">
            Your Bag is empty. Please browse through our catalog <br /> To add
            to your bag
          </h4>
        </div>
      ) : (
        <div>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
          <hr />
          <h3 className="text-2xl font-bold">
            Total Price is : ${price.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
