import React, { useState } from 'react';
import styles from './Wishlist.module.css';
import Mobiles from '../../assets/mobiles.jpg';

function Wishlist() {
    const [showAllClearContainer, setShowAllClearContainer] = useState(false);
    

    function allClearContainerShower() {
        setShowAllClearContainer(!showAllClearContainer);
    }
  return (
    <div className={styles.wishlistContainer} title="">
        <div className={styles.wishlistHeader}>
            <span>Guest</span>
            <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span>
        </div>
        <div className={styles.wishlistAllClearContainer}>
            <div>
                My Wishlist
            </div>
            <div>
                <button onClick={allClearContainerShower}><i className="fa fa-ellipsis-v"></i></button>
                <div className={`${styles.clearAllContainer} ${showAllClearContainer ? styles.clearAllContainer_active : styles.showAllClearContainer_disabled }`}>
                    <button>Clear All</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
        <div className={styles.productsContainer}>
            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className={styles.prodContainer}>
                <div className={styles.closeBtnDiv}>
                <span title="Close"><i className="fa fa-times" aria-hidden="true"></i></span> 
                </div>
                <div className={styles.offerText}>
                    25% Off
                </div>
                <div className={styles.imgContainer}>
                    <img src={Mobiles} alt="wishlist images" />
                </div>
                <div className={`${styles.starIconContainer}`}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </div>
                <div>
                <h2 className={`${styles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
                <h3 className={`${styles.prodPrice}`}>&#8377;29999</h3>
                <h5 className={`${styles.prodOrigiPrice}`}>&#8377;31999</h5>
                </div>
                <div className={styles.addToCartContainer}>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlist