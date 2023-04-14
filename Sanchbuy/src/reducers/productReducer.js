import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from "../constants/actionTypes";

const initialState = {
  products: [],
  search: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
