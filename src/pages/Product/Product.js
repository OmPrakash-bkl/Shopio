import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Product from '../../components/Product/Product';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function Register() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Product />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default Register