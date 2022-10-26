import React from 'react';
import Vivo from '../../assets/bs_mobile.jpg';
import Vivo1 from '../../assets/vivo1.jpg';
import Vivo2 from '../../assets/vivo2.jpg';
import Vivo3 from '../../assets/vivo3.jpg';
import Vivo4 from '../../assets/vivo4.jpg';
import styles from './Product.module.css';

function Product() {
  return (
    <div className={`${styles.productParentContainer}`}>
        <div className={`${styles.productImageParentContainer}`}>
            <div className={`${styles.productImageContainer}`}>
                <div className={`${styles.prodImgLeftContainer}`}>
                    <div>
                        <img src={Vivo1} alt="product images" />
                    </div>
                    <div>
                        <img src={Vivo2} alt="product images" />
                    </div>
                    <div>
                        <img src={Vivo3} alt="product images" />
                    </div>
                    <div>
                        <img src={Vivo4} alt="product images" />
                    </div>
                </div>
                <div className={`${styles.prodImgRightContainer}`}>
                    <img src={Vivo} alt="product images" />
                </div>
            </div>
            <div className={`${styles.prodActionButtonContainer}`}>
                <button className={`${styles.outlineBtn}`} title="Add To Cart">Add To Cart</button>
                <button className={`${styles.nonOutlineBtn}`} title="Buy Now">Buy Now</button>
                <button className={`${styles.outlineBtn}`} title="Add To Wishlist"><i className="fa fa-heart"></i></button>
            </div>
        </div>
        <div className={`${styles.productContentContainer}`}>
            <h2>Vivo Y22 with No Cost EMI</h2>
            <div className={`${styles.ratingContainer}`}>
                <div>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star nonChecked"></i></span>
                <span><i className="fa fa-star nonChecked"></i></span>
                </div>
                <span className={`${styles.reviewTxt}`}>3 Reviews</span>
            </div>
            <div className={`${styles.prodDetailsContainer}`}>
                <table className={`${styles.prodDetailsTable}`}>
                    <tbody>
                    <tr>
                        <th>AVAILABLE: </th>
                        <td className={`${styles.inStockIconContainer}`}>In Stock <i className="fa fa-check-square"></i></td>
                    </tr>
                    <tr>
                        <th>CATEGORIES: </th>
                        <td>Mobiles, Tablets</td>
                    </tr>
                    <tr>
                        <th>TAGS: </th>
                        <td>Smart Phones, Trending Mobiles</td>
                    </tr>
                    <tr>
                        <th>COLOR: </th>
                        <td>
                            <button className={`${styles.sizeAndColorBtns}`}>Red</button>
                            <button className={`${styles.sizeAndColorBtns}`}>Green</button>
                            <button className={`${styles.sizeAndColorBtns}`}>Yellow</button>
                            <button className={`${styles.sizeAndColorBtns}`}>Blue</button>
                            <button className={`${styles.sizeAndColorBtns} ${styles.sizeAndColorBtns_active}`}>Violet</button>
                        </td>
                    </tr>
                    <tr>
                        <th>SIZE: </th>
                        <td>
                            <button className={`${styles.sizeAndColorBtns}`}>S</button>
                            <button className={`${styles.sizeAndColorBtns}`}>M</button>
                            <button className={`${styles.sizeAndColorBtns} ${styles.sizeAndColorBtns_active}`}>L</button>
                            <button className={`${styles.sizeAndColorBtns}`}>XL</button>
                            <button className={`${styles.sizeAndColorBtns}`}>XXL</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={`${styles.priceContainer}`}>
                <h2>&#x20b9;9999</h2>
                <h3>&#x20b9;8999</h3>
            </div>
            <div className={`${styles.offerContainer}`}>
                <h3>10% OFF</h3>
            </div>
            <div className={`${styles.increDecreContainer}`}>
                <button>-</button>
                <b>1</b>
                <button>+</button>
            </div>
            <div className={`${styles.socialMediaBtnsContainer}`}>
                <button className={`${styles.colorBlueBtn}`}><i className="fa fa-facebook"></i> Share</button>
                <button className={`${styles.colorLiteBlueBtn}`}><i className="fa fa-twitter"></i> Tweet</button>
                <button className={`${styles.colorRedBtn}`}>@ PIN IT</button>
            </div>
        </div>
    </div>
  )
}

export default Product