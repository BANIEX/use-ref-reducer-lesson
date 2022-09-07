import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "./actions";
const reducer = (state, action) => {
  if (action.type === FETCH_PRODUCTS) {
    return {
      ...state,
      products: action.payload,
      loading: false,
    };
  }
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, amount: 1 }],
    };
  }
  if (action.type === UPDATE_CART) {
    const item = state.cart.find(
      (cartItem) => cartItem.id === action.payload.id
    );
    return {
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      ),
    };
  }
  if (action.type === REMOVE_FROM_CART) {
    const item = state.cart.find((cartItem) => cartItem.id === action.payload);
    return {
      ...state,
      cart: state.cart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.amount !== 0),
    };
  }
  return state;
};

export default reducer;
