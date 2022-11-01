import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';
import RecoverAccount from './pages/RecoverAccount/RecoverAccount';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import MyAccount from './pages/MyAccount/MyAccount';
import AccountDetails from './pages/AccountDetails/AccountDetails';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import MyAddresses from './pages/MyAddresses/MyAddresses';
import ContactUs from './pages/ContactUs/ContactUs';
import Product from './pages/Product/Product';
import ShippingInformation from './pages/ShippingInformation/ShippingInformation';
import ShippingMethod from './pages/ShippingMethod/ShippingMethod';
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
        <Route path="/Categories" exact element={<Categories />} />
        <Route path="/RecoverAccount" exact element={<RecoverAccount />} />
        <Route path="/ResetPassword" exact element={<ResetPassword />} />
        <Route path="/MyAccount" exact element={<MyAccount />} />
        <Route path="/AccountDetails" exact element={<AccountDetails />} />
        <Route path="/OrderHistory" exact element={<OrderHistory />} />
        <Route path="/MyAddresses" exact element={<MyAddresses />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
        <Route path="/Product" exact element={<Product />} />
        <Route path="/Information" exact element={<ShippingInformation />} />
        <Route path="/Method" exact element={<ShippingMethod />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
