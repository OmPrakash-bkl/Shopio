import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Signup from '../../components/Register/Signup';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function Register() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Signup />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default Register