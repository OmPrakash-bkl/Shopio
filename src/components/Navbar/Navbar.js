import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarData from './NavbarData';
import styles from './Navbar.module.css';
import Cat_Dp from '../../assets/dammy_dp.jpg';
import Container from 'react-bootstrap/Container';
import Mobile from '../../assets/mobiles_cart.jpg'; 
import Camera from '../../assets/td_camera.jpg'; 
import Shoes from '../../assets/shoes.jpg'; 
import SearchBar from './SearchBar';
import Wishlist from '../Wishlist/Wishlist';

function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showQuickNavbar, setShowQuickNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false); 
  const [showWishlist, setShowWishlist] = useState(false);
    

  function hamburgerShower() {
    setShowHamburger(!showHamburger);
  }

  function quickNavbarShower() {
    setShowQuickNavbar(!showQuickNavbar);
  }

  function cartShower() {
    setShowCart(!showCart);
  }

  
  function wishtlistShower() {
    setShowWishlist(!showWishlist);
}


  return (
  <Container fluid className={`${styles.navbarContainer}`}>
  <div className="hstack">
  <div className={`text-light ${styles.hamburgerIconSection}`}>
    <button className={`${styles.hamburgerIcon}`} onClick={hamburgerShower}>
    <i className="fa fa-bars" aria-hidden="true"></i>
    </button>
    <h1 className={`${styles.logoFontStyles}`}><Link to="/" className={`${styles.logoFontStyles}`}>Shopio</Link></h1>

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
        <h3>Guest</h3>
        <Link to="/Login"><button className={`${styles.LoginAndSignupBtns}`}>Login</button></Link>
        <Link to="/Register"><button className={`${styles.LoginAndSignupBtns}`}>Register</button></Link>
       </div>
        {/* Profile, Login, Logout Section End */}

      <ul style={{ paddingLeft: "0rem" }}>
        { SideBarData.map((data, index) => {
         return <li key={index} onClick={data.title == "My Cart" ? setShowCart : data.title == "My Wishlist" ? setShowWishlist : undefined } className={`${styles.hamburgerElementsContainer}`} >
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
  <div className="mx-auto d-none d-sm-none d-md-block fs-6">
     <form>
      <input type="search" className={`${styles.searchForm}`}  placeholder='Search products for more offer' />
      <button type="submit" className={`${styles.searchButton}`} >
      <i className="fa fa-search" aria-hidden="true"></i>
      </button>
     </form>
  </div>
  <div className="text-light  ms-auto d-sm-block d-md-block">
  <div className={`${styles.navIconsCartContainer}`} title="CART">
    <button onClick={cartShower}>
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>

  {/* Cart Container Start */}

  <div className={`${styles.cartContainer} ${showCart ? styles.cartContainer_active : styles.cartContainer_disabled }`} title="">

    <div className={styles.cartHeader}>
      <h2>Shopping Cart</h2>
      <button title="Close" onClick={cartShower}><i className="fa fa-times" aria-hidden="true"></i></button>
    </div>

    <div className={styles.cartItem}>
    
      <div>
        <div>
        <img src={Mobile} alt="cart images" className={styles.cartContainerImage} />
        </div>
        <div className={styles.middleContainer}>
        <h4 className={styles.cartContainerTitle}>vivo Y22 with No Cost EMI.</h4>
        <div className={styles.increDecreBtnContainer}>
          <button>-</button>
          { 1 }
          <button>+</button>
        </div>
        <span className={styles.qtyAndAmountText}>1 x <h5>&#8377;9999</h5></span>
        </div>
        <div className={styles.trashContainer}>
        <button title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
        <h4>&#8377;9999</h4>
        </div>
      </div>

      <div>
        <div>
        <img src={Camera} alt="camera images" className={styles.cartContainerImage} />
        </div>
        <div className={styles.middleContainer}>
        <h4 className={styles.cartContainerTitle}>Canon E4570 Camera 12MP</h4>
        <div className={styles.increDecreBtnContainer}>
          <button>-</button>
          { 1 }
          <button>+</button>
        </div>
        <span className={styles.qtyAndAmountText}>1 x <h5>&#8377;36999</h5></span>
        </div>
        <div className={styles.trashContainer}>
        <button title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
        <h4>&#8377;36999</h4>
        </div>
      </div>

      <div>
        <div>
        <img src={Shoes} alt="shoes images" className={styles.cartContainerImage} />
        </div>
        <div className={styles.middleContainer}>
        <h4 className={styles.cartContainerTitle}>vivo Y22 with No Cost EMI.</h4>
        <div className={styles.increDecreBtnContainer}>
          <button>-</button>
          { 1 }
          <button>+</button>
        </div>
        <span className={styles.qtyAndAmountText}>1 x <h5>&#8377;459</h5></span>
        </div>
        <div className={styles.trashContainer}>
        <button title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
        <h4>&#8377;459</h4>
        </div>
      </div>

    </div>

    <div className={styles.subTotalContainer}>
      <h4>Sub Total:</h4>
      <h4>&#8377; 18999</h4>
    </div>

    <div className={styles.commentContainer}>
      <textarea placeholder="Add a note to your order."></textarea>
      <p>Shipping & taxes calculated at checkout.</p>
      <button>Continue Shopping</button>
      <button>Update</button>
      <button>Checkout</button>
    </div>

  </div>


  {/* Cart Container End */}

  </div>
  <div className={`${styles.navIconsWishlistContainer}`} title="WISHLIST">
  <button onClick={wishtlistShower}><i className="fa fa-heart" aria-hidden="true"></i></button>
  { showWishlist && <Wishlist WishlistShowHandler={wishtlistShower} /> }
  </div>
  <div className={`${styles.navIconsContainer} ${styles.quickNavigationContainer}`} title="LOGIN/SIGNUP" onClick={quickNavbarShower}>
  <i className="fa fa-user" aria-hidden="true"></i>
  
  {/* Quick Navigation Container Start */}

  <div className={ !showQuickNavbar ? styles.quickNavMenuContainer : styles.quickNavMenuContainer_active }>

    <Link to="/MyAccount" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className="fa fa-user" aria-hidden="true"></i></span>
        <span title="">My Account</span>
      </div>
    </Link>

    <Link to="/Login" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className='fas fa-share-square'></i></span>
        <span title="">Login</span>
      </div>
    </Link>

    <Link to="/Register" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className='fas fa-address-book'></i></span>
        <span title="">Register</span>
      </div>
    </Link>

    <Link to="/" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
        <span title="">Checkout</span>
      </div>
    </Link>

    <Link to="/" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className="fa fa-heart"></i></span>
        <span title="">My Wishlist</span>
      </div>
    </Link>

    <Link to="/" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className="fa fa-bell" aria-hidden="true"></i></span>
        <span title="">Notifications</span>
      </div>
    </Link>

    <Link to="/" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className="fa fa-truck" aria-hidden="true"></i></span>
        <span title="">Track Order</span>
      </div>
    </Link>

    <Link to="/" className={`${styles.quickNavLinks}`}>
      <div className={styles.quickNavMenuElements}>
      <span title=""><i className='fas fa-user-times'></i></span>
        <span title="">Logout</span>
      </div>
    </Link>

  </div>

  {/* Quick Navigation Container End */}

  </div>
  </div>
  </div>

  {/* SearchBar For Mobile Container Start */}

  <SearchBar />

  {/* SearchBar For Mobile Container End  */}
  </Container>

  );
}

export default Navbar;