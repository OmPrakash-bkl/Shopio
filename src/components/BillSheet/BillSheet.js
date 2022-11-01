import React from 'react';
import Mobile from '../../assets/mobiles.jpg';
import Shoes from '../../assets/bs_shoes.jpg'
import styles from './BillSheet.module.css';

function BillSheet() {
  return (
    <div className={`${styles.billContainer}`}>
      <div className={`${styles.prodListParentContainer}`}>
      <div className={`${styles.cartProductsListContainer}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={Mobile} alt="mobile" />
        </div>
        <div className={`${styles.titleContainer}`}>
          <h4>vivo Y22 with No Cost EMI</h4>
        </div>
        <div className={`${styles.quantityContainer}`}>
          <span>x 1</span>
        </div>
        <div className={`${styles.priceContainer}`}>
        <span>&#8377;9999</span>
        </div>
      </div>
      <div className={`${styles.cartProductsListContainer}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={Shoes} alt="shoes" />
        </div>
        <div className={`${styles.titleContainer}`}>
          <h4>Sparx Mens Shoe for Running</h4>
        </div>
        <div className={`${styles.quantityContainer}`}>
          <span>x 1</span>
        </div>
        <div className={`${styles.priceContainer}`}>
        <span>&#8377;999</span>
        </div>
      </div>
      </div>
      <div className={`${styles.subTotalAndShippingContainer}`}>
        <div className={`${styles.subTotalTitleContainer}`}>
          <h4>SubTotal</h4>
          <h4>Shipping</h4>
        </div>
        <div className={`${styles.subTotalPriceContainer}`}>
          <h4>&#8377;10998</h4>
          <h4>&#8377;50</h4>
        </div>
      </div>
      <div className={`${styles.totalContainer}`}>
        <div className={`${styles.totalTitleContainer}`}>
          <h4>Total</h4>
        </div>
        <div className={`${styles.totalPriceContainer}`}>
          <h4>&#8377;11048</h4>
        </div>
      </div>
    
    </div>
  )
}

export default BillSheet