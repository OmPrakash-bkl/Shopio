import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';
import Mobiles from '../../assets/mobiles.jpg';
import Books from '../../assets/books.jpg';
import Dresses from '../../assets/dresses.jpg';
import Shoes from '../../assets/shoes.jpg';
import Laptops from '../../assets/laptops.jpg';
import Electronics from '../../assets/electronics.jpg';
import Toys from '../../assets/toys.jpg';
import Furnitures from '../../assets/furnitures.jpg';
import Accesories from '../../assets/accesories.jpg';
import Speakers from '../../assets/speakers.jpg';
import Housewares from '../../assets/housewares.jpg';
import KitchanEquipment from '../../assets/kitchanEquipment.jpg';
import Headphones from '../../assets/headphones.jpg';
import Professionals from '../../assets/professionals.jpg';
import Security from '../../assets/security.jpg';
import GamingConsoles from '../../assets/gamingConsoles.jpg';


function Categories() {
  return (
    <div className={`${styles.categoriesContainer}`}>

        <h2 className={`${styles.categoriesContainerHeading}`}>All Categories</h2>

        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Mobiles} alt="Mobiles" />
            <h6>Mobiles</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Books} alt="Books" />
            <h6>Books</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Dresses} alt="Dresses" />
            <h6>Dresses</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Shoes} alt="Shoes" />
            <h6>Shoes</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Laptops} alt="Laptops" />
            <h6>Laptops</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Electronics} alt="Electronics" />
            <h6>Electronics</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Furnitures} alt="Furnitures" />
            <h6>Furnitures</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Toys} alt="Toys" />
            <h6>Toys</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Accesories} alt="Accesories" />
            <h6>Accesories</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Speakers} alt="Speakers" />
            <h6>Speakers</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Housewares} alt="Housewares" />
            <h6>Housewares</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={KitchanEquipment} alt="Kitchan Equipment" />
            <h6>Kitchan Equipment</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Headphones} alt="Headphones" />
            <h6>Headphones</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Professionals} alt="Professionals" />
            <h6>Professionals</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={Security} alt="Security" />
            <h6>Security</h6>
        </div>
        </Link>
        <Link to="/">
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={GamingConsoles} alt="Gaming Consoles" />
            <h6>Gaming Consoles</h6>
        </div>
        </Link>
    </div>
  )
}

export default Categories