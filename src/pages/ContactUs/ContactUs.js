import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import ContactForm from '../../components/ContactUs/ContactUs';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function ContactUs() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <ContactForm />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default ContactUs;