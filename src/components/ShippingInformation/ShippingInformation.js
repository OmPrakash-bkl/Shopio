import React, { useState } from 'react';
import styles from './ShippingInformation.module.css';
import { Link } from 'react-router-dom';
import BillSheet from '../../components/BillSheet/BillSheet';

function ShippingInformation() {

    const [showCoupon, setShowCoupon] = useState(false);
    const [mobBill, setMobBill] = useState(false);

    function couponShower() {
        setShowCoupon(!showCoupon);
    }

    function mobileBillShower() {
        setMobBill(!mobBill);
    }
  return (
    <div className={`${styles.informationParentContainer}`}>
        <div className={`${styles.shipAddressContainer}`}>
            <h2>Shopio</h2>
            <div className={`${styles.breadCrumbContainer}`}>
                <Link style={{ textDecoration: "none" }} to="/Information"><button className={`${styles.navBtnsActive}`}>Information</button> <i className='fas fa-angle-right' style={{ color: "rgb(80, 80, 80)" }}></i></Link>
                <Link style={{ textDecoration: "none" }}  to="/Method"><button className={`${styles.navBtns}`}>Shipping</button> <i className='fas fa-angle-right' style={{ color: "rgb(80, 80, 80)" }}></i></Link>
                <Link style={{ textDecoration: "none" }}  to="/Payment"><button className={`${styles.navBtns}`}>Payment</button></Link>
            </div>
            <div className={`${styles.mobBillSheetContainer}`}>
            <div onClick={mobileBillShower} className={`${styles.mobBillSheetBtnContainer}`}>
                <div>
                    <button>Show BillAmount</button>
                </div>
                <div>
                    <button> <i className='fas fa-angle-down' ></i></button>
                </div>
            </div>
            { mobBill && <div className={`${styles.mobBillAmountContainer}`}>
            <BillSheet />
            </div> }
            </div>
            <h4>Contact Information</h4>
            <div className={`${styles.usernameContainer}`}>
                <div className={`${styles.userIconContainer}`}>
                    <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
                <div className={`${styles.userEmailContainer}`}>
                    <p>omprakashgwt@gmail.com</p>
                    <button>Logout</button>
                </div>
            </div>
            <div className={`${styles.newsLetterSignupForm}`}>
                <form>
                    <input type="checkbox" id="newsletter" />
                    <label htmlFor="newsletter">Email me with News and Offers.</label>
                </form>
            </div>
            <div className={`${styles.couponParentContainer}`}>
                <button onClick={couponShower}>Apply Coupon</button>
               { showCoupon && <div className={`${styles.couponContainer}`}>
                    <p>If you have a coupon code, please apply it below.</p>
                    <form>
                    <input type="text" className={`${styles.couponInputBox}`} placeholder="Enter Coupon" />
                    <button className={`${styles.couponBtn}`}>Apply Coupon</button>
                    </form>
                </div> } 
            </div>
            <h5>Shipping Address</h5>
            <div className={`${styles.addSelectorBtnContainer}`}>
                <button className={`${styles.addSelectorBtnActive}`}><i className="fa fa-circle" aria-hidden="true"></i> Default Address</button>
                <button className={`${styles.addSelectorBtn}`}><i className="fa fa-circle" aria-hidden="true"></i> Secondary Address</button>
                <button className={`${styles.addSelectorBtn}`}><i className="fa fa-circle" aria-hidden="true"></i> New Address</button>
            </div>
            <div className={`${styles.addressFormContainer}`}>
                <form>
                    <input className={`${styles.fullWidthInputBox}`} type="text" placeholder="Country" />
                    <input className={`${styles.halfWidthInputBox}`} type="text" placeholder="First Name" />
                    <input className={`${styles.halfWidthInputBox}`} type="text" placeholder="Last Name" />
                    <input className={`${styles.fullWidthInputBox}`} type="text" placeholder="Street" />
                    <input className={`${styles.fullWidthInputBox}`} type="text" placeholder="Phone Number" />
                    <input className={`${styles.quadorWidthInputBox}`} type="text" placeholder="City" />
                    <input className={`${styles.quadorWidthInputBox}`} type="text" placeholder="State" />
                    <input className={`${styles.quadorWidthInputBox}`} type="text" placeholder="Pin Code" />
                    <button className={`${styles.continueShopBtn}`}>Continue To Shipping</button>
                    <button className={`${styles.returnCartBtn}`}><i className='fas fa-angle-left'></i> Return To Cart</button>
                </form>
            </div>
        </div>
        <div className={`${styles.billSheetContainer}`}>
        <BillSheet />
        </div>
    </div>
  )
}

export default ShippingInformation;