import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Vivo from '../../assets/bs_mobile.jpg';
import Vivo1 from '../../assets/vivo1.jpg';
import Vivo2 from '../../assets/vivo2.jpg';
import Vivo3 from '../../assets/vivo3.jpg';
import Vivo4 from '../../assets/vivo4.jpg';
import styles from './Product.module.css';
import FSProducts from '../../components/FAProducts/FAProducts';

function Product() {

    const [showReviewBox, setShowReviewBox] = useState(false);
    const [showQABox, setShowQABox] = useState(false);

    function reviewBoxShower() {
        setShowReviewBox(!showReviewBox);
    }

    function QABoxShower() {
        setShowQABox(!showQABox);
    }

  return (
    <>
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
                        <td><Link to="/" style={{ textDecoration: "none", color: "rgb(110, 110, 110)" }}>Mobiles</Link>, <Link to="/" style={{ textDecoration: "none", color: "rgb(110, 110, 110)" }}>Tablets</Link></td>
                    </tr>
                    <tr>
                        <th>TAGS: </th>
                        <td><Link to="/" style={{ textDecoration: "none", color: "rgb(110, 110, 110)" }}>Smart Phones</Link>, <Link to="/" style={{ textDecoration: "none", color: "rgb(110, 110, 110)" }}>Trending Mobiles</Link></td>
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
                <button className={`${styles.colorBlueBtn}`}><i className="fab fa-facebook-f"></i> SHARE</button>
                <button className={`${styles.colorLiteBlueBtn}`}><i className="fab fa-twitter"></i> TWEET</button>
                <button className={`${styles.colorRedBtn}`}>@ PIN IT</button>
            </div>
        </div>
    </div>
    <div className={`${styles.productDescription}`}>
        <div className={`${styles.TitleContainer}`}>
        <h4>PRODUCT DESCRIPTION</h4>
        </div>
        <p>Vivo Y22 5G mobiles comes with a 6.50-inch touchscreen display with a resolution of 720x1600 pixels. Vivo Y22 5G is powered by an octo-core MediaTek Dimensity 720 processor. It comes with 6GB of RAM. The Vivo Y22 5G runs Android 11 and is powered by a 5000mAh battery. The Vivo Y22 5G supports proprietary fast charging.</p>
    </div>
    <div className={`${styles.productSpecification}`}>
        <div className={`${styles.TitleContainer}`}>
        <h4>PRODUCT DESCRIPTION</h4>
        </div>
        <table>
            <tbody className={`${styles.tableHeaderAndElementsContainer}`}>
                <tr>
                    <th>In The Box: </th>
                    <td>Model, Documentation, USB Cable, USB Power Adapter, Sim Eject Tool, Protective Film (Applied), Phone Case</td>
                </tr>
                <tr>
                    <th>Model Name: </th>
                    <td>Y22</td>
                </tr>
                <tr>
                    <th>Color: </th>
                    <td>Starlit Blue</td>
                </tr>
                <tr>
                    <th>Display Size: </th>
                    <td>16.64 cm (6.55 inch)</td>
                </tr>
                <tr>
                    <th>Resolution Type: </th>
                    <td>HD+</td>
                </tr>
                <tr>
                    <th>Operating System: </th>
                    <td>Android 12</td>
                </tr>
                <tr>
                    <th>Processor Type: </th>
                    <td>Mediatek Helio G70</td>
                </tr>
                <tr>
                    <th>Internal Storage: </th>
                    <td>64 GB</td>
                </tr>
                <tr>
                    <th>RAM: </th>
                    <td>4 GB</td>
                </tr>
                <tr>
                    <th>Primary Camera: </th>
                    <td>50MP + 2MP</td>
                </tr>
                <tr>
                    <th>Secondary Camera: </th>
                    <td>8MP Front Camera</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className={`${styles.productReviews}`}>
        <div className={`${styles.TitleContainerReview}`}>
        <h4>PRODUCT'S REVIEWS</h4>
        <button onClick={reviewBoxShower}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
        <div className={`${styles.reviewFormContainer} ${showReviewBox ? styles.reviewFormContainerActive : styles.reviewFormContainerDisabler}`}>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Ratings (Enter Number from 1 to 5)" />
                <input type="text" placeholder="Description" />
                <button className={`${styles.reviewContainerBtns}`}>Submit</button>
                <button type="button" onClick={reviewBoxShower} className={`${styles.reviewContainerBtns}`}>Cancel</button>
            </form>
        </div>
        <div className={`${styles.prodPeopleReviewContainer}`}>
            <h5>Prakash</h5>
            <div className={`${styles.reviewRatingStarsContainer}`}>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star nonChecked"></i></span>
                <span><i className="fa fa-star nonChecked"></i></span>
            </div>
            <p>Nice product and cheapest price.</p>
            <button><i className="fa fa-thumbs-up"></i> 1</button>
            <button><i className="fa fa-thumbs-down"></i> 0</button>
        </div>
        <div className={`${styles.prodPeopleReviewContainer}`}>
            <h5>Rajesh</h5>
            <div className={`${styles.reviewRatingStarsContainer}`}>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star checked"></i></span>
                <span><i className="fa fa-star nonChecked"></i></span>
                <span><i className="fa fa-star nonChecked"></i></span>
            </div>
            <p>Good looking product.</p>
            <button><i className="fa fa-thumbs-up"></i> 1</button>
            <button><i className="fa fa-thumbs-down"></i> 0</button>
        </div>
    </div>
    <div className={`${styles.productQandA}`}>
        <div className={`${styles.TitleContainerQandA}`}>
        <h4>PRODUCT'S QA</h4>
        <button onClick={QABoxShower}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
        <div className={`${styles.qaSearchBarContainer}`}>
            <form>
            <input type="search" placeholder="Have a Question? Search for Answers" />
            <button><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
        <div className={`${styles.QandAFormContainer} ${showQABox ? styles.QandAFormContainerActive : styles.QandAFormContainerDisabler}`}>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Question recording to the product" />
                <button className={`${styles.QandAContainerBtns}`}>Submit</button>
                <button type="button"onClick={QABoxShower} className={`${styles.QandAContainerBtns}`}>Cancel</button>
            </form>
        </div>
        <div className={`${styles.prodPeopleQandAContainer}`}>
            <h5>Prakash</h5>
            <h5 className={`${styles.question}`}>Is this Mobile Waterproof?</h5>
            <h5 className={`${styles.answer}`}>No.</h5>
            <button><i className="fa fa-thumbs-up"></i> 1</button>
            <button><i className="fa fa-thumbs-down"></i> 0</button>
        </div>
        <div className={`${styles.prodPeopleQandAContainer}`}>
            <h5>Rajesh</h5>
            <h5 className={`${styles.question}`}>What is the RAM of this Mobile?</h5>
            <h5 className={`${styles.answer}`}>4 GB.</h5>
            <button><i className="fa fa-thumbs-up"></i> 1</button>
            <button><i className="fa fa-thumbs-down"></i> 0</button>
        </div>
    </div>
    <div className={`${styles.FAProdContainer}`}>
        <div className={`${styles.TitleContainerFAProd}`}>
        <h4>PRODUCT'S QA</h4>
        </div>
        <FSProducts />
    </div>
    </>
  )
}

export default Product