import React from 'react';
import styles from './OrderTracker.module.css';
import Vivo from '../../assets/bs_mobile.jpg';

function OrderTracker() {
  return (
    <div className={`${styles.orderTrackerContainer}`}>
        <div className={`${styles.orderedProductsContainer}`}>
            <div>
                <img src={Vivo} className={`${styles.orderTrackProdImage}`} alt="ordered products" />
            </div>
            <div className={`${styles.orderDetailsContentContainer}`}>
                <span className={`${styles.orderProdId}`}>#001</span>
                <h3>Vivo Y22 with No Cost EMI</h3>
                <h4 className={`${styles.orderedProdPrice}`}>&#x20b9;8999</h4>
                <h4 className={`${styles.orderedProdOffer}`}>10% Off</h4>
            </div>
        </div>
        <div className={`${styles.orderedProductsContainer}`}>
            <div>
                <img src={Vivo} className={`${styles.orderTrackProdImage}`} alt="ordered products" />
            </div>
            <div className={`${styles.orderDetailsContentContainer}`}>
                <span className={`${styles.orderProdId}`}>#001</span>
                <h3>Vivo Y22 with No Cost EMI</h3>
                <h4 className={`${styles.orderedProdPrice}`}>&#x20b9;8999</h4>
                <h4 className={`${styles.orderedProdOffer}`}>10% Off</h4>
            </div>
        </div>

        <div className={`${styles.orderTrackerStepsContainer}`}>
            <div className={`${styles.orderStepContainer}`}>
                <div className={`${styles.orderStepParentContainer}`}>
                    <div className={`${styles.orderStepsContainer}`}>
                        <div className={`${styles.orderNumber}`}>
                            1
                        </div>
                        <div className={`${styles.orderScale}`}></div>
                    </div>
                    <div className={`${styles.orderStepsLineContainer}`}>
                        <span><i class='fas fa-box-open'></i></span>
                    </div>
                </div>
                <div>
                    <h2>order placed</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderTracker