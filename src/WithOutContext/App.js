import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import { useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "./actions";
import reducer from "./reducer";
const initialState = {
  products: [],
  cart: [],
  loading: true,
  isCartOpen: false,
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://fakestoreapi.com/products";

  const fetchProducts = async (url) => {
    try {
      const products = await fetch(url);
      const data = await products.json();
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);

  const handleAddToCart = (item) => {
    const itemInCart = state.cart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      dispatch({ type: UPDATE_CART, payload: item });
      return;
    } ///

    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const getTotalAmount = (item) => {
    const totalAmount = state.cart.reduce(
      (acc, item) => (acc += item.amount),
      0
    );
    return totalAmount;
  };
  const getTotalPrice = (item) => {
    const totalPrice = state.cart.reduce(
      (acc, item) => (acc += item.amount * item.price),
      0
    );
    return totalPrice;
  };
  if (state.loading) {
    return (
      <>
        <div className="pt-20">
          <div className="loading"></div>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto">
      <Navbar getTotalAmount={getTotalAmount} />
      <div className="flex mt-8">
        <div className="w-8/12">
          <Catalog
            products={state.products}
            handleAddToCart={handleAddToCart}
          />
        </div>
        <div className="bg-white w-4/12">
          <Cart
            cart={state.cart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            getTotalPrice={getTotalPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
