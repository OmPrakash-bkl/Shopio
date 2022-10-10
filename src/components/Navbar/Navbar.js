import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './Navbar.module.css';

function Navbar() {
  return (
  <Container fluid className={`${styles.navbarContainer}`}>
  <div className="hstack">
  <div className="text-light"><h1 className={`${styles.logoFontStyles}`}>Shopio</h1></div>
  <div className="mx-auto fs-6">
     <form>
      <input type="search" className={`${styles.searchForm}`}  placeholder='Search products for more offer' />
      <button type="submit" className={`${styles.searchButton}`} >
      <i className="fa fa-search" aria-hidden="true"></i>
      </button>
     </form>
  </div>
  <div className="text-light">
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