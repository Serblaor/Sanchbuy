import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "../constants/actionTypes";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
  const existingItemIndex = state.cartItems.findIndex(
    (x) => x.id === action.payload.id
  );
  if (existingItemIndex !== -1) {
    const updatedCartItems = [...state.cartItems];
    updatedCartItems[existingItemIndex] = {
      ...updatedCartItems[existingItemIndex],
      quantity: updatedCartItems[existingItemIndex].quantity + action.payload.quantity
    };
    return {
      ...state,
      cartItems: updatedCartItems
    };
  }
  return {
    ...state,
    cartItems: [...state.cartItems, action.payload],
  };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
