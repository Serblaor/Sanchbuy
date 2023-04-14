import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { cartReducer } from "./cartReducer";

import productReducer from "./productReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
