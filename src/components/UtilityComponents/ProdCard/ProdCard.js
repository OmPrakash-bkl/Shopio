import React from 'react';
import styles from './ProdCard.module.css';
import { Link } from 'react-router-dom';

function ProdCard(props) {
  return (
    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>{props.data.offerPercentage}</div>
        <Link to="/Product">
        <img src={props.data.prodImg} className={`${styles.cardChildContainersImage}`} alt={props.data.prodTitle} />
        </Link>
        <div className={`${styles.starIconContainer}`}>
          { props.data.rating >= 1 ? <i className={`fa fa-star`}></i> : <i style={{ color: "rgb(99, 99, 99)" }} className={`fa fa-star`}></i> }
          { props.data.rating >= 2 ? <i className={`fa fa-star`}></i> : <i style={{ color: "rgb(99, 99, 99)" }} className={`fa fa-star`}></i> }
          { props.data.rating >= 3 ? <i className={`fa fa-star`}></i> : <i style={{ color: "rgb(99, 99, 99)" }} className={`fa fa-star`}></i> }
          { props.data.rating >= 4 ? <i className={`fa fa-star`}></i> : <i style={{ color: "rgb(99, 99, 99)" }} className={`fa fa-star`}></i> }
          { props.data.rating >= 5 ? <i className={`fa fa-star`}></i> : <i style={{ color: "rgb(99, 99, 99)" }} className={`fa fa-star`}></i> }
        </div>
        <Link to="/Product" style={{ textDecoration: 'none' }}>
        <h2 className={`${styles.cardTitle}`}>{props.data.prodTitle}</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;{props.data.discountPrice}</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;{props.data.originalPrice}</h5>
        </Link>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart" onClick={props.data.cartFunc ? props.data.cartFunc : null }><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist" onClick={props.data.wishlistFunc ? props.data.wishlistFunc : null }><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View" onClick={props.data.quickViewFunc ? props.quickViewShower : null }><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>
  )
}

export default ProdCard;