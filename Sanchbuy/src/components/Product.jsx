import React from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from '../actions/cartActions'
import {addFavorite} from '../actions/favoritesActions'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faHeart} from "@fortawesome/free-solid-svg-icons"
import Swal from 'sweetalert2';

import '../styles/product.scss'

const Product = ({ product, showFavoriteButton = true} ) => {
  const showConfirmationAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Agregado!',
          'El producto se ha agregado correctamente',
          'success'
        )
      }
    })
  }
  
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(addToCart({...product}))
    showConfirmationAlert('Agregar al carrito', `¿Está seguro que desea agregar ${product.nombre} al carrito?`, 'question');
  }
  
  const onAddToFavorites = () => {
    dispatch(addFavorite({...product}))
    showConfirmationAlert('Agregar a favoritos', `¿Está seguro que desea agregar ${product.nombre} a favoritos?`, 'question');
  }
  
  return (
  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" className="image-container" src={product.foto} alt={product.nombre} />
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>{product.descripcion}</Card.Text>
      <Card.Text>${product.precio}</Card.Text>
      <div className="product-buttons">
        <Button variant="primary" title="Agregar a Carrito" onClick={onAddToCart}><i><FontAwesomeIcon icon={faCartPlus} /></i></Button>
        { showFavoriteButton && <Button variant="secondary" title="Añadir a favorito" onClick={onAddToFavorites}><i><FontAwesomeIcon icon={faHeart} /></i></Button> }
      </div>
    </Card.Body>
  </Card>
  );
};

export default Product;
