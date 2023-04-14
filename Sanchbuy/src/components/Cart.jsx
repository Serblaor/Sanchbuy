import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { Card, Button } from 'react-bootstrap';
import '../styles/cart.scss'
import NavBar from './Navbar';
import axios from 'axios';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleRemoveItemClick = (item) => {
    dispatch(removeFromCart(item));
  };
  const handlecomprar = async (item) => {
    const enviar = await axios.post(`http://localhost:3001/api/checkout`, {
      empployeeId: user.id, products:
        [{ pId: item.id, quantity: item.quantity }]
    })
    console.log(enviar)
  }

  const total = cartItems.reduce((acc, curr) => {
    if (curr.product) {
      return acc + curr.product.precio * curr.quantity;
    }
    return acc;
  }, 0);

  return (
    <>
      <NavBar />
      <div className='card'>
        <h1>Carrito de compras</h1>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <div >
            <Card>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <Card.Img variant="top" src={item.foto} alt="" />
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Card.Text>Precio: {item.precio}</Card.Text>
                    <Card.Text>Cantidad: {item.quantity}</Card.Text>
                    <Button onClick={() => handleRemoveItemClick(item)}>Quitar</Button>
                    <Button onClick={() => handlecomprar(item)}>Comprar</Button>
                  </Card.Body>
                </div>
              ))}
              <Card.Footer>Total: ${cartItems.reduce((a, b) => a + (b.precio * b.quantity), 0)}</Card.Footer>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;


