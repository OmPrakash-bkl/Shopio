import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Profile from '../../components/MyAccount/MyAccount';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function MyAccount() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Profile />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default MyAccount;