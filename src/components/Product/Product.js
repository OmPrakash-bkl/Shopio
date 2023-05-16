import React, { useState } from "react";
import { Link } from "react-router-dom";
import IPhone from "../../assets/iphone1.jpg";
import IPhone1 from "../../assets/iphone2.jpg";
import IPhone2 from "../../assets/iphone3.jpg";
import IPhone3 from "../../assets/iphone4.jpg";
import IPhone4 from "../../assets/iphone5.jpg";
import styles from "./Product.module.css";
import FSProducts from "../../components/FAProducts/FAProducts";
import Button from "../UtilityComponents/Button/Button";

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
                <img src={IPhone1} alt="product images" />
              </div>
              <div>
                <img src={IPhone2} alt="product images" />
              </div>
              <div>
                <img src={IPhone3} alt="product images" />
              </div>
              <div>
                <img src={IPhone4} alt="product images" />
              </div>
            </div>
            <div className={`${styles.prodImgRightContainer}`}>
              <img src={IPhone} alt="product images" />
            </div>
          </div>
          <div className={`${styles.prodActionButtonContainer}`}>
            <Button
              variant="buttonComponent outlineButtonComponent"
              title="Add To Cart"
            >
              Add To Cart
            </Button>
            <Button
              variant="buttonComponent blueButtonComponent"
              title="Buy Now"
            >
              Buy Now
            </Button>
            <Button
              variant="buttonComponent outlineButtonComponent"
              title="Add To Wishlist"
            >
              <i className="fa fa-heart"></i>
            </Button>
            <a href="https://mywebar.com/p/Project_4_2x476117bo?_ga=2.148594289.711936732.1684144066-1215011679.1683694055">
              <Button
                variant="buttonComponent outlineButtonComponent"
                title="AR View"
              >
                <i className="fas fa-dice-d6"></i>
              </Button>
            </a>
          </div>
        </div>
        <div className={`${styles.productContentContainer}`}>
          <h2>Apple iPhone 13 - 128GB RED</h2>
          <div className={`${styles.ratingContainer}`}>
            <div>
              <span>
                <i className="fa fa-star checked"></i>
              </span>
              <span>
                <i className="fa fa-star checked"></i>
              </span>
              <span>
                <i className="fa fa-star checked"></i>
              </span>
              <span>
                <i className="fa fa-star nonChecked"></i>
              </span>
              <span>
                <i className="fa fa-star nonChecked"></i>
              </span>
            </div>
            <span className={`${styles.reviewTxt}`}>3 Reviews</span>
          </div>
          <div className={`${styles.prodDetailsContainer}`}>
            <table className={`${styles.prodDetailsTable}`}>
              <tbody>
                <tr>
                  <th>AVAILABLE: </th>
                  <td className={`${styles.inStockIconContainer}`}>
                    In Stock <i className="fa fa-check-square"></i>
                  </td>
                </tr>
                <tr>
                  <th>CATEGORIES: </th>
                  <td>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "rgb(110, 110, 110)",
                      }}
                    >
                      Mobiles
                    </Link>
                    ,{" "}
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "rgb(110, 110, 110)",
                      }}
                    >
                      Tablets
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>TAGS: </th>
                  <td>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "rgb(110, 110, 110)",
                      }}
                    >
                      Smart Phones
                    </Link>
                    ,{" "}
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "rgb(110, 110, 110)",
                      }}
                    >
                      Trending Mobiles
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>COLOR: </th>
                  <td>
                    <Button variant="buttonComponent outlineButtonComponent firstButtonComponent">
                      Red
                    </Button>
                    <Button variant="buttonComponent outlineButtonComponent">
                      Green
                    </Button>
                    <Button variant="buttonComponent outlineButtonComponent">
                      Yellow
                    </Button>
                    <Button variant="buttonComponent outlineButtonComponent">
                      Blue
                    </Button>
                    <Button variant="buttonComponent  outlineButtonComponentActive">
                      Violet
                    </Button>
                  </td>
                </tr>
                <tr>
                  {/* <th>SIZE: </th>
                  <td>
                    <Button variant="buttonComponent outlineButtonComponent firstButtonComponent">
                      S
                    </Button>
                    <Button variant="buttonComponent outlineButtonComponent">
                      M
                    </Button>
                    <Button variant="buttonComponent outlineButtonComponentActive">
                      L
                    </Button>
                    <Button variant="buttonComponent outlineButtonComponent">
                      XL
                    </Button>
                    <Button variant="buttonComponent  outlineButtonComponent">
                      XXL
                    </Button>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${styles.priceContainer}`}>
            <h2>&#x20b9;69900</h2>
            <h3>&#x20b9;62999</h3>
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
            <button className={`${styles.colorBlueBtn}`}>
              <i className="fab fa-facebook-f"></i> SHARE
            </button>
            <button className={`${styles.colorLiteBlueBtn}`}>
              <i className="fab fa-twitter"></i> TWEET
            </button>
            <button className={`${styles.colorRedBtn}`}>@ PIN IT</button>
          </div>
        </div>
      </div>
      <div className={`${styles.productDescription}`}>
        <div className={`${styles.TitleContainer}`}>
          <h4>PRODUCT DESCRIPTION</h4>
        </div>
        <p>
          15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow
          depth of field and shifts focus automatically in your videos. Advanced
          dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic
          Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording. 12MP
          TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording.
          A15 Bionic chip for lightning-fast performance.
        </p>
      </div>
      <div className={`${styles.productSpecification}`}>
        <div className={`${styles.TitleContainer}`}>
          <h4>PRODUCT DESCRIPTION</h4>
        </div>
        <table>
          <tbody className={`${styles.tableHeaderAndElementsContainer}`}>
            <tr>
              <th>In The Box: </th>
              <td>
                Model, Documentation, USB Cable, USB Power Adapter, Sim Eject
                Tool, Protective Film (Applied), Phone Case
              </td>
            </tr>
            <tr>
              <th>Model Name: </th>
              <td>IPhone 13</td>
            </tr>
            <tr>
              <th>Color: </th>
              <td>Starlit Blue</td>
            </tr>
            <tr>
              <th>Display Size: </th>
              <td>15 cm (6.1-inch)</td>
            </tr>
            <tr>
              <th>Resolution Type: </th>
              <td>HD+</td>
            </tr>
            <tr>
              <th>Operating System: </th>
              <td>IOS 14</td>
            </tr>
            <tr>
              <th>Processor Type: </th>
              <td>A15 Bionic</td>
            </tr>
            <tr>
              <th>Internal Storage: </th>
              <td>128 GB</td>
            </tr>
            <tr>
              <th>RAM: </th>
              <td>6 GB</td>
            </tr>
            <tr>
              <th>Primary Camera: </th>
              <td>12MP</td>
            </tr>
            <tr>
              <th>Secondary Camera: </th>
              <td>12MP Front Camera</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`${styles.productReviews}`}>
        <div className={`${styles.TitleContainerReview}`}>
          <h4>PRODUCT'S REVIEWS</h4>
          <button onClick={reviewBoxShower}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div
          className={`${styles.reviewFormContainer} ${
            showReviewBox
              ? styles.reviewFormContainerActive
              : styles.reviewFormContainerDisabler
          }`}
        >
          <form>
            <input type="text" placeholder="Name" />
            <input
              type="text"
              placeholder="Ratings (Enter Number from 1 to 5)"
            />
            <input type="text" placeholder="Description" />
            <Button variant="buttonComponent outlineButtonComponent">
              Submit
            </Button>
            <Button
              variant="buttonComponent outlineButtonComponent"
              onClick={reviewBoxShower}
            >
              Cancel
            </Button>
          </form>
        </div>
        <div className={`${styles.prodPeopleReviewContainer}`}>
          <h5>Prakash</h5>
          <div className={`${styles.reviewRatingStarsContainer}`}>
            <span>
              <i className="fa fa-star checked"></i>
            </span>
            <span>
              <i className="fa fa-star checked"></i>
            </span>
            <span>
              <i className="fa fa-star checked"></i>
            </span>
            <span>
              <i className="fa fa-star nonChecked"></i>
            </span>
            <span>
              <i className="fa fa-star nonChecked"></i>
            </span>
          </div>
          <p>Nice product and cheapest price.</p>
          <button>
            <i className="fa fa-thumbs-up"></i> 1
          </button>
          <button>
            <i className="fa fa-thumbs-down"></i> 0
          </button>
        </div>
        <div className={`${styles.prodPeopleReviewContainer}`}>
          <h5>Rajesh</h5>
          <div className={`${styles.reviewRatingStarsContainer}`}>
            <span>
              <i className="fa fa-star checked"></i>
            </span>
            <span>
              <i className="fa fa-star checked"></i>
            </span>
            <span>
              <i className="fa fa-star checked"></i>
            </span>
            <span>
              <i className="fa fa-star nonChecked"></i>
            </span>
            <span>
              <i className="fa fa-star nonChecked"></i>
            </span>
          </div>
          <p>Good looking product.</p>
          <button>
            <i className="fa fa-thumbs-up"></i> 1
          </button>
          <button>
            <i className="fa fa-thumbs-down"></i> 0
          </button>
        </div>
      </div>
      <div className={`${styles.productQandA}`}>
        <div className={`${styles.TitleContainerQandA}`}>
          <h4>PRODUCT'S QA</h4>
          <button onClick={QABoxShower}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div className={`${styles.qaSearchBarContainer}`}>
          <form>
            <input
              type="search"
              placeholder="Have a Question? Search for Answers"
            />
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <div
          className={`${styles.QandAFormContainer} ${
            showQABox
              ? styles.QandAFormContainerActive
              : styles.QandAFormContainerDisabler
          }`}
        >
          <form>
            <input type="text" placeholder="Name" />
            <input
              type="text"
              placeholder="Question recording to the product"
            />
            <Button variant="buttonComponent outlineButtonComponent">
              Submit
            </Button>
            <Button
              variant="buttonComponent outlineButtonComponent"
              onClick={QABoxShower}
            >
              Cancel
            </Button>
          </form>
        </div>
        <div className={`${styles.prodPeopleQandAContainer}`}>
          <h5>Prakash</h5>
          <h5 className={`${styles.question}`}>Is this Mobile Waterproof?</h5>
          <h5 className={`${styles.answer}`}>No.</h5>
          <button>
            <i className="fa fa-thumbs-up"></i> 1
          </button>
          <button>
            <i className="fa fa-thumbs-down"></i> 0
          </button>
        </div>
        <div className={`${styles.prodPeopleQandAContainer}`}>
          <h5>Rajesh</h5>
          <h5 className={`${styles.question}`}>
            What is the RAM of this Mobile?
          </h5>
          <h5 className={`${styles.answer}`}>4 GB.</h5>
          <button>
            <i className="fa fa-thumbs-up"></i> 1
          </button>
          <button>
            <i className="fa fa-thumbs-down"></i> 0
          </button>
        </div>
      </div>
      <div className={`${styles.FAProdContainer}`}>
        <div className={`${styles.TitleContainerFAProd}`}>
          <h4>RELATED PRODUCTS</h4>
        </div>
        <FSProducts />
      </div>
    </>
  );
}

export default Product;
