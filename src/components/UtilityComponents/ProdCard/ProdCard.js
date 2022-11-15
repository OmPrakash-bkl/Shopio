import React from 'react';
import styles from './ProdCard.module.css';

function ProdCard(props) {
  return (
    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>{props.data.offerPercentage}</div>
        <img src={props.data.prodImg} alt={props.data.prodTitle} />
        <div className={`${styles.starIconContainer}`}>
            <i className={`${props.data.rating >= 1 ? "fa fa-star" : "fa fa-star-o"}`}></i>
            <i className={`${props.data.rating >= 2 ? "fa fa-star" : "fa fa-star-o"}`}></i>
            <i className={`${props.data.rating >= 3 ? "fa fa-star" : "fa fa-star-o"}`}></i>
            <i className={`${props.data.rating >= 4 ? "fa fa-star" : "fa fa-star-o"}`}></i>
            <i className={`${props.data.rating >= 5 ? "fa fa-star" : "fa fa-star-o"}`}></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>{props.data.prodTitle}</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;{props.data.discountPrice}</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;{props.data.originalPrice}</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart" onClick={props.data.cartFunc ? props.data.cartFunc : null }><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist" onClick={props.data.wishlistFunc ? props.data.wishlistFunc : null }><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={props.data.quickViewFunc ? props.quickViewShower : null }><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>
  )
}

export default ProdCard;