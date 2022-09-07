import React from "react";
import { useCity } from "../context";
const Navbar = () => {
  const { amount } = useCity();
  return (
    <div className="container h-24 bg-blue-400 mx-auto">
      <div className="flex justify-between item-center px-10">
        <h1 className="text-3xl text-white font-bold font-mono">Hot Store</h1>
        <button className="bg-blue-800 p-4 w-8 flex items-center justify-center rounded-md text-white text-2xl">
          {amount}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
