import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';
import Product from './Product';
import Navbar from './Navbar';
import '../styles/favorites.scss'

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.favorites);
  const handleRemove = (productId) => {
    dispatch(removeFavorite(productId));
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='favorites-container'>
        <h2 className='favorites-title'>Favoritos</h2>
        {favorites.length === 0 && <p className='favorites-p'>No hay productos en favoritos.</p>}
        {favorites.map(product => (

          <div className="favorites-card" key={product.id}>
            <Product
              product={product}
              showFavoriteButton={false}
            />
            <button className='remove-button' onClick={() => handleRemove(product.id)}>Remover de favoritos</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;


