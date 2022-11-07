import React from 'react';
import styles from './MyAccount.module.css';
import { Link } from 'react-router-dom';

function MyAccount() {
  return (
    <div className={`${styles.myAccountContainer}`}>
        <h2>My Profile</h2>
        <div className={`${styles.myAccountInnerContainer}`}>
            <Link to="/OrderTracker" style={{ textDecoration: "none" }}>
            <div className={`${styles.myAccountNavigationLinkContainer}`}>
                <span><i className="fa fa-truck" aria-hidden="true"></i></span>
                <h4>Orders</h4>
            </div>
            </Link>
            <Link to="/OrderHistory" style={{ textDecoration: "none" }}>
            <div className={`${styles.myAccountNavigationLinkContainer}`}>
                <span><i className="fa fa-history" aria-hidden="true"></i></span>
                <h4>Orders History</h4>
            </div>
            </Link>
            <Link to="/MyAddresses" style={{ textDecoration: "none" }}>
            <div className={`${styles.myAccountNavigationLinkContainer}`}>
                <span><i className="fa fa-address-card"></i></span>
                <h4>Addresses</h4>
            </div>
            </Link>
            <Link to="/AccountDetails" style={{ textDecoration: "none" }}>
            <div className={`${styles.myAccountNavigationLinkContainer}`}>
                <span><i className="fa fa-user-circle"></i></span>
                <h4>Account Details</h4>
            </div>
            </Link>
            <Link to="/DeliveredProducts" style={{ textDecoration: "none" }}>
            <div className={`${styles.myAccountNavigationLinkContainer}`}>
                <span><i className='fas fa-box-open'></i></span>
                <h4>Delivered Products</h4>
            </div>
            </Link>
        </div>
    </div>

  )
}

export default MyAccount;