import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from '../actions/authActions';
import { searchProducts } from '../actions/productActions';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../styles/navbar.scss';

const NavBar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchTerm));
    setSearchTerm('');
  };

  return (
    <Navbar bg="light" expand="lg">
      
      <Container>
        <Link className="navbar-brand" to="/">
          SANCHBUY
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favoritos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="badge badge-pill badge-info">{cartItems.length}</span>
            </Nav.Link>
            <Nav.Link onClick={() => setSearchTerm('')} >
              <i className="fas fa-search"></i>
            </Nav.Link>
            <NavDropdown title={`Hola, ${user ? user.nombre : 'invitado'}`} id="basic-nav-dropdown">
              {user ? (
                <>
                  <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout} title='Logout'>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </NavDropdown.Item>
                </>
              ) : (
                <Nav.Link as={Link} to="/login" title='Login'>
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              )}
            </NavDropdown>
            <Form onSubmit={handleSubmit}>
              <div className="input-group">
                <FormControl
                  type="text"
                  placeholder="Buscar"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="input-group-append">
                  <Button variant="outline-primary" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </div>
              </div>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


