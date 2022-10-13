import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import SideBarData from './NavbarData';
import styles from './Navbar.module.css';
import Cat_Dp from '../../assets/dammy_dp.jpg';

function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);

  function hamburgerShower() {
    setShowHamburger(!showHamburger);
  }

  return (
  <Container fluid className={`${styles.navbarContainer}`}>
  <div className="hstack">
  <div className={`text-light ${styles.hamburgerIconSection}`}>
    <button className={`${styles.hamburgerIcon}`} onClick={hamburgerShower}>
    <i className="fa fa-bars" aria-hidden="true"></i>
    </button>
    <h1 className={`${styles.logoFontStyles}`}>Shopio</h1>
    {/* Hamburger Section Start */}
    <div className={`${ !showHamburger ? styles.hamburgerMenuContainer : styles.hamburgerMenuContainer_active }`}>
      {/* Close Button Section Start */}
      <div className={`${styles.closeBtnContainer}`}>
        <button onClick={hamburgerShower}><i className="fa fa-close"></i></button>
      </div>
       {/* Close Button Section End */}
       {/* Profile, Login, Logout Section Start */}
       <div className={`${styles.profilePictureContainer}`}>
        <img src={Cat_Dp} className={styles.dpImage} alt="User's profile pictures" />
        <h3>User Name</h3>
        <button>Login</button>
        <button>Register</button>
       </div>
        {/* Profile, Login, Logout Section End */}
      <ul style={{ paddingLeft: "0rem" }}>
        { SideBarData.map((data, index) => {
         return <li key={index} className={`${styles.hamburgerElementsContainer}`}>
          <Link to={`${data.path}`} className={`${styles.hamburgerElementsInnerContainer}`}>
            <span><i className={`${data.iconClass}`}></i></span>
            <span>{`${data.title}`}</span>
          </Link>
        </li>
        }) }
      </ul>
    </div>
    {/* Hamburger Section End */}
  </div>
  <div className="mx-auto fs-6">
     <form>
      <input type="search" className={`${styles.searchForm}`}  placeholder='Search products for more offer' />
      <button type="submit" className={`${styles.searchButton}`} >
      <i className="fa fa-search" aria-hidden="true"></i>
      </button>
     </form>
  </div>
  <div className="text-light d-none d-sm-none d-md-block">
  <div className={`${styles.navIconsContainer}`} title="CART">
  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
  </div>
  <div className={`${styles.navIconsContainer}`} title="WISHLIST">
  <i className="fa fa-heart" aria-hidden="true"></i>
  </div>
  <div className={`${styles.navIconsContainer}`} title="LOGIN/SIGNUP">
  <i className="fa fa-user" aria-hidden="true"></i>
  </div>
  </div>
  </div>
  </Container>

  );
}

export default Navbar;