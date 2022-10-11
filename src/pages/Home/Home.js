import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Slider from '../../components/Slider/Slider';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import PopularCategories from '../../components/PopularCategories/PopularCategories';

function home() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Slider />
    <CustomerInfo />
    <PopularCategories />
    </>
  )
}

export default home