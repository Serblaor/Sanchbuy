import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants/actionTypes";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const index = state.favorites.findIndex(
        (x) => x.id === action.payload.id
      );
      if (index !== -1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
  
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
