import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Recover from '../../components/RecoverAccount/RecoverAccount';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function RecoverAccount() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Recover />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default RecoverAccount;