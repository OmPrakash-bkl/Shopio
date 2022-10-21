import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import History from '../../components/OrderHistory/OrderHistory';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function OrderHistory() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <History />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default OrderHistory;