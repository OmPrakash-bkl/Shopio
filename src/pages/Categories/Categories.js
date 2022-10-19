import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Category from '../../components/Categories/Categories';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function Categories() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Category />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default Categories;