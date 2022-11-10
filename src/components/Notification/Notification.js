import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notification.module.css';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';

function Notification() {
  return (
    <div className={`${styles.notificationContainer}`}>
        <PageHeading>Notification</PageHeading>
        <Link style={{ textDecoration: "none" }} to="/">
        <div className={`${styles.notifyComponents}`}>
            <div className={`${styles.logoContainer}`}>
                <h1>S</h1>
            </div>
            <div className={`${styles.notifyContentContainer}`}>
                <h4 className={`${styles.notifyContentContainerTitle}`}>Back In Stock!</h4>
                <p>The blue dress you were looking for is back in stock! Grap it NOW!</p>
                <h4 className={`${styles.dateAndTime}`}>14/02/22 18:00PM</h4>
            </div>
        </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
        <div className={`${styles.notifyComponents}`}>
            <div className={`${styles.logoContainer}`}>
                <h1>S</h1>
            </div>
            <div className={`${styles.notifyContentContainer}`}>
                <h4 className={`${styles.notifyContentContainerTitle}`}>Back In Stock!</h4>
                <p>The blue dress you were looking for is back in stock! Grap it NOW!</p>
                <h4 className={`${styles.dateAndTime}`}>14/02/22 18:00PM</h4>
            </div>
        </div>
        </Link>
        <h2>No Notification Found!</h2>
    </div>
  )
}

export default Notification