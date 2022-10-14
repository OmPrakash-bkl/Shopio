import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Signin from '../../components/Login/Signin';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Signin />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default Login;