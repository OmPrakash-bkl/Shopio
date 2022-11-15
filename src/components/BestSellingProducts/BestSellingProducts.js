import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Vivo from '../../assets/bs_mobile.jpg';
import styles from './BestSellingProducts.module.css';
import ComponentHeading from '../UtilityComponents/ComponentHeading/ComponentHeading';
import { ProductData } from './BestSellingProductsData';
import ProdCard from '../UtilityComponents/ProdCard/ProdCard';


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

    {
        ProductData.map((data) => {
            return <ProdCard key={data.prodTitle} quickViewShower={quickViewShower} data={data} />;
        })
    }


    </div>

    <hr style={{ background: 'blue',
    color: 'blue',
    borderColor: 'lime',
    height: '3px', }} />

    </Container>
  )
}

export default BestSellingProducts;