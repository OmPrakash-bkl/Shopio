import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import OdTracker from '../../components/OrderTracker/OrderTracker';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function OrderTracker() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <OdTracker />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default OrderTracker;