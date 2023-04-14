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
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );
      if (index !== -1) {
        state.cartItems[index].quantity =
          state.cartItems[index].quantity + action.payload.quantity;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.producto !== action.payload),
      };
    default:
      return state;
  }
};
