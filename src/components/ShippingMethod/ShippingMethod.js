import React, { useState } from 'react';
import styles from './ShippingMethod.module.css';
import { Link } from 'react-router-dom';
import BillSheet from '../../components/BillSheet/BillSheet';

function ShippingMethod() {

    const [showCoupon, setShowCoupon] = useState(false);
    const [mobBill, setMobBill] = useState(false);

    function couponShower() {
        setShowCoupon(!showCoupon);
    }

    function mobileBillShower() {
        setMobBill(!mobBill);
    }
  return (
    <div className={`${styles.methodParentContainer}`}>
        <div className={`${styles.shipMethodContainer}`}>
            <h2>Shopio</h2>
            <div className={`${styles.breadCrumbContainer}`}>
                <Link style={{ textDecoration: "none" }} to="/Information"><button className={`${styles.navBtns}`}>Information</button> <i className='fas fa-angle-right' style={{ color: "rgb(80, 80, 80)" }}></i></Link>
                <Link style={{ textDecoration: "none" }}  to="/Method"><button className={`${styles.navBtnsActive}`}>Shipping</button> <i className='fas fa-angle-right' style={{ color: "rgb(80, 80, 80)" }}></i></Link>
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
            <h4>Shipping Method</h4>
            
            <div className={`${styles.shippingMethodAddressContainer}`}>
                <table>
                    <tbody>
                        <tr className={`${styles.addressDetailsRow} ${styles.addressDetailsRow1}`}>
                            <td className={`${styles.addressHeading}`}>Contact</td>
                            <td>omprakashgwt@gmail.com</td>
                            <td><button>Change</button></td>
                        </tr>
                        <tr className={`${styles.addressDetailsRow} ${styles.addressDetailsRow2}`}>
                            <td className={`${styles.addressHeading}`}>Ship To</td>
                            <td>13/A, Prasanna Colony, 3rd Street, Avaniyapuram, Madurai - 625012.</td>
                            <td><button>Change</button></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
            <h5>Choose Method</h5>
            <div className={`${styles.shippingMethodChooserContainer}`}>
                <div>
                    <div>
                    <button className={`${styles.methodActive}`}><i className="fa fa-circle" aria-hidden="true"></i></button>
                    </div>
                    <div className={`${styles.methodType}`}>
                    Standard
                    </div>
                    <div className={`${styles.methodPrice}`}>
                    &#8377;50.00
                    </div>
                </div>
                <div>
                    <div>
                    <button><i className="fa fa-circle" aria-hidden="true"></i></button>
                    </div>
                    <div className={`${styles.methodType}`}>
                    Air
                    </div>
                    <div className={`${styles.methodPrice}`}>
                    &#8377;75.00
                    </div>
                </div>
                <div>
                    <div>
                    <button><i className="fa fa-circle" aria-hidden="true"></i></button>
                    </div>
                    <div className={`${styles.methodType}`}>
                    Land
                    </div>
                    <div className={`${styles.methodPrice}`}>
                    &#8377;40.00
                    </div>
                </div>
                <div>
                    <div>
                    <button><i className="fa fa-circle" aria-hidden="true"></i></button>
                    </div>
                    <div className={`${styles.methodType}`}>
                    Sea
                    </div>
                    <div className={`${styles.methodPrice}`}>
                    &#8377;30.00
                    </div>
                </div>
            </div>
            <div>
            <button className={`${styles.continueShopBtn}`}>Continue To Payment</button>
            <button className={`${styles.returnCartBtn}`}><i className='fas fa-angle-left'></i> Return To Information</button>
            </div>
            
        </div>
        <div className={`${styles.billSheetContainer}`}>
        <BillSheet />
        </div>
    </div>
  )
}

export default ShippingMethod;