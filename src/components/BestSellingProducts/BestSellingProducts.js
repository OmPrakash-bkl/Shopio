import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import styles from './BestSellingProducts.module.css';
import Mobile from '../../assets/bs_mobile.jpg';
import Drone from '../../assets/bs_drone.jpg';
import Sarees from '../../assets/bs_saree.jpg';
import TV from '../../assets/bs_tv.jpg';
import Tablets from '../../assets/bs_tablets.jpg';
import Fridge from '../../assets/bs_fridge.jpg';
import Shoes from '../../assets/bs_shoes.jpg';
import Vivo from '../../assets/bs_mobile.jpg';
import Laptops from '../../assets/bs_laptops.jpg';
import ComponentHeading from '../UtilityComponents/ComponentHeading/ComponentHeading';


function BestSellingProducts() {

    const [showQuickView, setShowQuickView] = useState(false);

    function quickViewShower() {
        setShowQuickView(!showQuickView);
    }

  return (
    <Container fluid>
    <ComponentHeading>Best Selling Categories</ComponentHeading>

    <div className={`${styles.cardContainer}`}>

        <div onClick={quickViewShower} className={`${styles.quickViewBackScreen} ${showQuickView ? styles.quickViewBackScreenActive : '' }`}>
            <div className={`${styles.quickViewContainer}`}>
                <div className={`${styles.quickViewImageContainer}`}>
                <button onClick={quickViewShower} className={`${styles.quickViewCloseBtnMob}`}><i className="fa fa-close"></i></button>
                    <div className={`${styles.imgChangeBtnContainer}`}>
                        <button><i className="fa fa-chevron-left"></i></button>
                        <button><i className="fa fa-chevron-right"></i></button>
                    </div>
                    <div>
                    <img src={Vivo} alt="mobiles" />
                    </div>
                    <div>
                    <button className={`${styles.viewDetailsBtn}`}>View Details</button>
                    </div>
                </div>
                <div className={`${styles.quickViewDetailsContainer}`}>
                    <button onClick={quickViewShower} className={`${styles.quickViewCloseBtn}`}><i className="fa fa-close"></i></button>
                    <div>
                        <h3>Vivo Y22 with No Cost EMI</h3>
                        <span className={`${styles.offerPrice}`}>&#8377;9999</span>
                        <span className={`${styles.originalPrice}`}>&#8377;11999</span>
                        <div className={`${styles.starIconContainer} ${styles.quickViewStarIconContainer}`}>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className={`${styles.ratingRateTxt}`}>3 Reviews</span>
                        </div>
                        <div className={`${styles.increDecrementBtnContainer}`}>
                            <button><i className="fa fa-minus"></i></button>
                            <span>2</span>
                            <button><i className="fa fa-plus"></i></button>
                        </div>
                        <button className={`${styles.addToCartButton}`}>Add To Cart</button>
                        <div className={`${styles.categoryTagsContainer}`}>
                            <span>Categories: </span>
                            <Link style={{ textDecoration: "none" }} className={`${styles.categoryTagsLinks}`} to="/">Mobiles, </Link>
                            <Link style={{ textDecoration: "none" }} className={`${styles.categoryTagsLinks}`} to="/">Tablets</Link>
                        </div>
                        <div className={`${styles.categoryTagsContainer}`}>
                            <span>Tags: </span>
                            <Link style={{ textDecoration: "none" }} className={`${styles.categoryTagsLinks}`} to="/">Smart Phones, </Link>
                            <Link style={{ textDecoration: "none" }} className={`${styles.categoryTagsLinks}`} to="/">Trending Phones</Link>
                        </div>
                        <div className={`${styles.socialMediaIconsContainer}`}>
                            <span>Share: </span>
                            <a href="#"><button><i className="fab fa-facebook-f"></i></button></a>
                            <a href="#"><button><i className="fab fa-twitter"></i></button></a>
                            <a href="#"><button><i className="fab fa-whatsapp"></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Mobile} alt="Mobiles" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>vivo Y22 with No Cost EMI</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;9999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;11999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Drone} alt="Drones" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Remote Control HD Wi-Fi Camera Drone</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;3999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;4999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Sarees} alt="Sarees" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Women's Printed Poly Silk Saree with Blouse</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;269</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;799</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={TV} alt="TV" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Redmi Android 11 Series Full HD </h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;16999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;18999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Fridge} alt="Fridge" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Godrej Cool Single Door Refrigerator</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;10999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;11999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Shoes} alt="Shoes" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Sparx Mens Shoe for Running</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;1999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Laptops} alt="Laptops" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Acer Nitro 5 Gaming Laptop</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;79999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;81999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>
    
    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Mobile} alt="Mobiles" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>vivo Y22 with No Cost EMI.</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;9999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;11999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={quickViewShower}><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>


    </div>

    <hr style={{ background: 'blue',
    color: 'blue',
    borderColor: 'lime',
    height: '3px', }} />

    </Container>
  )
}

export default BestSellingProducts;