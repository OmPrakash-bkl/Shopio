import React from 'react';
import Vivo from '../../assets/bs_mobile.jpg';
import Laptops from '../../assets/bs_laptops.jpg'
import styles from './DeliveredProducts.module.css';

function DeliveredProducts() {
  return (
    <div className={`${styles.deliveredProductsParentContainer}`}>
      <h2>Delivered Products</h2>
        <div className={`${styles.deliveredProductsContainer}`}>
          <div>
            <span>1. </span>
            <img src={Vivo} className={`${styles.deliverdProductImg}`} alt="Vivo Mobiles" />
          </div>
          <div>
            <h4>Vivo Y22 with No Cost EMI</h4>
          </div>
          <div>
            <span>X 1</span>
          </div>
          <div className={`${styles.deliverdProductPriceContainer}`}>
            <span>&#x20b9;8999</span>
          </div>
          <div className={`${styles.deliverdProductsActionBtnContainer1}`}>
            <button>Return</button>
          </div>
          <div className={`${styles.deliverdProductsActionBtnContainer2}`}>
            <button>Exchange</button>
          </div>
        </div>
        <div className={`${styles.deliveredProductsContainer}`}>
          <div>
            <span>2. </span>
            <img src={Laptops} className={`${styles.deliverdProductImg}`} alt="Acer Laptops" />
          </div>
          <div>
            <h4>Acer Nitro 5 Gaming Laptop</h4>
          </div>
          <div>
            <span>X 1</span>
          </div>
          <div className={`${styles.deliverdProductPriceContainer}`}>
            <span>&#x20b9;79999</span>
          </div>
          <div className={`${styles.deliverdProductsActionBtnContainer1}`}>
            <button>Return</button>
          </div>
          <div className={`${styles.deliverdProductsActionBtnContainer2}`}>
            <button>Exchange</button>
          </div>
        </div>
    </div>
  )
}

export default DeliveredProducts