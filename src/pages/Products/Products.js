import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Product from '../../components/Products/Products';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function Products() {
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

export default Products;