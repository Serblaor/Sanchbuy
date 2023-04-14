import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import '../styles/login.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({email, password}));
    navigate('/');
  };

  return (
    <>
    <div className='pantalla'>
    <div className="login-container">
  <h2>Iniciar sesión</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Correo electrónico</label>
      <div className="input-container">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <i ><FontAwesomeIcon icon={faEnvelope} /></i>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña</label>
      <div className="input-container">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <i><FontAwesomeIcon icon={faLock} /></i>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
  </form>
</div>
</div>
</>
  );
};

export default Login;

