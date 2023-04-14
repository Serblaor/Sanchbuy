import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import NavBar from './Navbar'
import { fetchProducts } from '../actions/productActions';
import {searchP} from '../hooks/index'
import '../styles/home.scss'

const Home = () => {
  const {products, search} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const ca = searchP(search, products)

  useEffect (() => {
    dispatch(fetchProducts())
  },[])

  
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div className='home'>
      <h2>Productos</h2>
      <div className="product-list">
        {ca.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;