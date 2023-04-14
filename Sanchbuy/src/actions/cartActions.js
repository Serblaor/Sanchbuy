import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants/actionTypes";

export const addToCart = (item) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: item,
});
