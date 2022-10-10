import React from 'react'
import TopNavBar from '../../components/Navbar/TopNavBar';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryShower/CategoryBar';
import Slider from '../../components/Slider/Slider';

function home() {
  return (
    <>
    <TopNavBar />
    <Navbar />
    <CategoryBar />
    <Slider />
    </>
  )
}

export default home