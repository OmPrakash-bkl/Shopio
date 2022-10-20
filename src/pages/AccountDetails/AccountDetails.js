import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Account from '../../components/AccountDetails/AccountDetails';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function AccountDetails() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Account />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default AccountDetails;