import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
function NavbarRouter() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" />
    </Routes>
    </BrowserRouter>
  )
}

export default NavbarRouter