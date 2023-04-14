import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE, ORDER_PRODUCTS_BY_PRICE, SEARCH_PRODUCTS } from '../constants/actionTypes';
import axios from "axios"

export const fetchProducts = () => async (dispatch) => {
  const e = await axios.get(`http://localhost:3001/api/products`);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: e.data,
  });
};


export const filterProducts = (products, priceRange) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: {
      priceRange: priceRange,
      filteredProducts: priceRange
        ? products.filter(
            (product) => product.price >= priceRange.minPrice && product.price <= priceRange.maxPrice
          )
        : products,
    },
  });
};
export const searchProducts = (searchTerm) => (dispatch) => {
  
  dispatch({
    type: SEARCH_PRODUCTS,
    payload: searchTerm,
  });
};

export const sortProducts = (products, sortOption) => (dispatch) => {
  const sortedProducts = [...products].sort((a, b) =>
    sortOption === 'lowestprice'
      ? a.price > b.price
        ? 1
        : -1
      : sortOption === 'highestprice'
      ? a.price < b.price
        ? 1
        : -1
      : a._id < b._id
      ? 1
      : -1
  );
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sortOption,
      filteredProducts: sortedProducts,
    },
  });
};
