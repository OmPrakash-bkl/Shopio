import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Reset from '../../components/ResetPassword/ResetPassword';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function ResetPassword() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Reset />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default ResetPassword;