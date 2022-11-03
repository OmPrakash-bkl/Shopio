import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Notifi from '../../components/Notification/Notification';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function Notification() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Notifi />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default Notification;