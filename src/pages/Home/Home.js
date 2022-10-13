import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import NavbarRouter from '../../components/Navbar/NavbarRouter';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Slider from '../../components/Slider/Slider';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import Banner from '../../components/Banner/Banner';
import BestSellingProducts from '../../components/BestSellingProducts/BestSellingProducts';
import TopDealOnElectronics from '../../components/TopDealsOnElectronics/TopDealOnElectronics';
import TopCategoriesShower from '../../components/TopCategoriesShower/TopCategoriesShower';
import Banner2 from '../../components/Banner/Banner2';
import NewsLetterSignup from '../../components/NewsLetterSignup/NewsLetterSignup';
import Footer from '../../components/Footer/Footer';

function home() {
  return (
    <>
    <TopNavBar />
    <NavbarRouter />
    <CategoryBar />
    <Slider />
    <CustomerInfo />
    <PopularCategories />
    <Banner />
    <BestSellingProducts />
    <TopDealOnElectronics />
    <Banner2 />
    <TopCategoriesShower />
    <NewsLetterSignup />
    <Footer />
    </>
  )
}

export default home