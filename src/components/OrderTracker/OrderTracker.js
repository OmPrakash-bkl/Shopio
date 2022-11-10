import React, { useState } from 'react';
import styles from './OrderTracker.module.css';
import Vivo from '../../assets/bs_mobile.jpg';
import Button from '../UtilityComponents/Button/Button';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';

function OrderTracker() {

    const [showCancelForm, setShowCancelForm] = useState(false);

    function cancelFormShower() {
        setShowCancelForm(!showCancelForm);
    }

  return (
    <div className={`${styles.orderTrackerContainer}`}>
        <PageHeading>Order Tracker</PageHeading>
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
                        <div className={`${styles.orderNumber} ${styles.orderNumberActive}`}>
                            1
                        </div>
                        <div className={`${styles.orderScale} ${styles.orderScaleActive}`}></div>
                    </div>
                    <div className={`${styles.orderStepsLineContainer}`}>
                        <span><i className='fas fa-box-open'></i></span>
                    </div>
                </div>
                <div className={`${styles.orderStepContentContainer}`}>
                    <h2>Order Placed</h2>
                    <p>We have received your order</p>
                    <span>05/05/22</span>
                </div>
            </div>
            
            <div className={`${styles.orderStepContainer}`}>
                <div className={`${styles.orderStepParentContainer}`}>
                    <div className={`${styles.orderStepsContainer}`}>
                        <div className={`${styles.orderNumber}`}>
                            2
                        </div>
                        <div className={`${styles.orderScale}`}></div>
                    </div>
                    <div className={`${styles.orderStepsLineContainer}`}>
                        <span><i className='fa fa-check-square'></i></span>
                    </div>
                </div>
                <div className={`${styles.orderStepContentContainer}`}>
                    <h2>Order Confirmed</h2>
                    <p>Your order has been confirmed</p>
                    <span>Soon</span>
                </div>
            </div>

            <div className={`${styles.orderStepContainer}`}>
                <div className={`${styles.orderStepParentContainer}`}>
                    <div className={`${styles.orderStepsContainer}`}>
                        <div className={`${styles.orderNumber}`}>
                            3
                        </div>
                        <div className={`${styles.orderScale}`}></div>
                    </div>
                    <div className={`${styles.orderStepsLineContainer}`}>
                        <span><i className='fas fa-hourglass'></i></span>
                    </div>
                </div>
                <div className={`${styles.orderStepContentContainer}`}>
                    <h2>Order Processed</h2>
                    <p>We are preparing your order</p>
                    <span>Soon</span>
                </div>
            </div>

            <div className={`${styles.orderStepContainer}`}>
                <div className={`${styles.orderStepParentContainer}`}>
                    <div className={`${styles.orderStepsContainer}`}>
                        <div className={`${styles.orderNumber}`}>
                            4
                        </div>
                        <div className={`${styles.orderScaleDisabled}`}></div>
                    </div>
                    <div className={`${styles.orderStepsLineContainer}`}>
                        <span><i className='fas fa-truck'></i></span>
                    </div>
                </div>
                <div className={`${styles.orderStepContentContainer}`}>
                    <h2>Ready To Pickup</h2>
                    <p>Your order is ready for pickup</p>
                    <span>Soon</span>
                </div>
            </div>
        </div>
        <div className={`${styles.cancelFormContainer}`}>
            <Button onClick={cancelFormShower} variant="buttonComponent orangeRedButtonComponent">Cancel Your Order</Button>
            { showCancelForm && <div className={`${styles.orderCancelingFormContainer}`}>
                <form>
                    <select className={`${styles.orderCancelReasonSelector}`}>
                        <option value="">Reasons for Cancellation</option>
                        <option value="I want to change address for the order">I want to change address for the order</option>
                        <option value="I want to change my phone number">I want to change my phone number</option>
                        <option value="I have purchased the product else where">I have purchased the product else where</option>
                        <option value="Need different size or color">Need different size or color</option>
                        <option value="Expected delivery time is very long">Expected delivery time is very long</option>
                        <option value="I have changed my mind">I have changed my mind</option>
                        <option value="Price for the product has decreased">Price for the product has decreased</option>
                        <option value="I want to convert my order to prepaid">I want to convert my order to prepaid</option>
                        <option value="I want to cancel due to product quality issues">I want to cancel due to product quality issues</option>
                        <option value="others">others</option>
                    </select>
                    <div className={`${styles.canceledProductPaymentDetailsContainer}`}>
                        <span className={`${styles.canceledProductPaymentDetailsContainerHeading}`}>Caution!</span>
                        <span>1. There will be no refund as the order is purchased using Cash-On-Delivery.</span>
                        <span>2. If had you already paid means, it will refund after accepted the cancellation.</span>
                    </div>
                    <Button variant="buttonComponent blueButtonComponent">Make Order Cancel Request</Button>
                </form>
            </div> }
            
        </div>
    </div>
  )
}

export default OrderTracker