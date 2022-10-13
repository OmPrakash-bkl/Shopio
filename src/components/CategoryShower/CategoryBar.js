import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './CategoryBar.module.css';

function CategoryBar() {

  const [showDropdown, setshowDropdown ] = useState(true);

  function dropdownShower() {
    setshowDropdown(!showDropdown);
  }

  return (
  <Container fluid className={styles.categoryBarContainer}>
  <div className="hstack">
  <div className="d-md-none d-sm-none d-none d-lg-block">

    <div className={`${styles.dropdownContainer}`} onClick={dropdownShower}>
      <button><span>Search By Categories</span> <i className={`${ !showDropdown ? 'fa fa-chevron-up' : 'fa fa-chevron-down' }`}></i></button>

      <div className={`${showDropdown ? styles.dropdownElementsContainer : styles.dropdownElementsContainer_active }`}>

        <div className={`${styles.dropdownElementsInnerContainer}`}>
                <div>
                <i className='fas fa-mobile-alt'></i>
                </div>
               <div>
               Mobiles
               </div>
        </div>

        <div className={`${styles.dropdownElementsInnerContainer}`}>
                <div>
                <i className="fa fa-laptop"></i>
                </div>
               <div>
               Laptops
               </div>
        </div>

        <div className={`${styles.dropdownElementsInnerContainer}`}>
                <div>
                <i className="fa fa-plug"></i>
                </div>
               <div>
               Electronics
               </div>
        </div>

        <div className={`${styles.dropdownElementsInnerContainer}`}>
                <div>
                <i className='fas fa-bed'></i>
                </div>
               <div>
               Furnitures
               </div>
        </div>

        <div className={`${styles.dropdownElementsInnerContainer}`}>
                <div>
                <i className="fa fa-child"></i>
                </div>
               <div>
               Toys
               </div>
        </div>

        <div className={`${styles.dropdownElementsInnerContainer}`}>
                <div>
                ...
                </div>
               <div>
               More
               </div>
        </div>


      </div>

    </div>


  </div>
  <div className={`d-md-none d-sm-none d-none d-lg-block ${styles.categoryButtonsContainer}`}>
    <div>
    <button className={styles.categoryButtons}>Mobiles</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Electronics</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Beauty & Toys</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Furniture</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Grocery</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Applications</button>
    </div>
  
  </div>
  </div>
  </Container>

  );
}

export default CategoryBar;