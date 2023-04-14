import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants/actionTypes";

export const addFavorite = (product) => {
  return {
    type: ADD_FAVORITE,
    payload: product,
  };
};

export const removeFavorite = (productId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: productId,
  };
};
