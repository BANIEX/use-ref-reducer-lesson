import React from "react";
import { useCity } from "../context";
import Item from "./Item";

const Catalog = () => {
  const { products } = useCity();
  return (
    <div>
      {products.map((item) => {
        return (
          <div className="flex">
            <Item item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
