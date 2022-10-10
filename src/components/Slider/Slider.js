import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/slide1.jpg';
import Slide2 from '../../assets/slide2.jpg';
import Slide3 from '../../assets/slide3.jpg';
import Styles from './Slider.module.css';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="slide images"/>
        <Carousel.Caption>
        <button className={`${Styles.shopNowBtn}`}>Shop Now <i class="fa fa-shopping-cart"></i></button>
          <p  className={`${Styles.shopNowSlideSlogan}`}>Ensuring the best welfare of the buyers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide2} alt="slide images"/>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Slide3} alt="slide images"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;