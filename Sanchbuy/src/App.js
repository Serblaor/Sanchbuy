import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import './styles/App.scss'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
}

export default App;
