import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Address from '../../components/MyAddresses/MyAddresses';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function MyAddresses() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Address />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default MyAddresses;