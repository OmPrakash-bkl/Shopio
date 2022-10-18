import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Products" exact element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
