import React, { useContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "./actions";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  products: [],
  cart: [],
  loading: true,
  isCartOpen: false,
};

const AppProvider = ({ children }) => {
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
  //   const getTotalAmount = (item) => {
  //     const totalAmount = state.cart.reduce(
  //       (acc, item) => (acc += item.amount),
  //       0
  //     );
  //     return totalAmount;
  //   };
  //   const getTotalPrice = (item) => {
  //     const totalPrice = state.cart.reduce(
  //       (acc, item) => (acc += item.amount * item.price),
  //       0
  //     );
  //     return totalPrice;
  //   };
  const getTotal = () => {
    const totalAmount = state.cart.reduce(
      (acc, cartItem) => {
        acc.amount += cartItem.amount;
        acc.price += cartItem.price * cartItem.amount;
        return acc;
      },
      {
        amount: 0,
        price: 0,
      }
    );
    return totalAmount;
  };
  const { amount, price } = getTotal();
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleAddToCart,
        removeFromCart,
        amount,
        price,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCity = () => {
  return useContext(AppContext);
};
export default AppProvider;
