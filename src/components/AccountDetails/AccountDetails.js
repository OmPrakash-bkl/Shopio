import React from 'react';
import styles from './AccountDetails.module.css';
import Button from '../UtilityComponents/Button/Button';
import { Link } from 'react-router-dom';
import Dammy_Dp from '../../assets/dammy_dp.jpg';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';

function AccountDetails() {
  return (
    <div className={`${styles.accountDetailsContainer}`}>
        <PageHeading>My Account</PageHeading>
        <img src={Dammy_Dp}  className={`${styles.userDp}`} alt="User Profile Picture" />
        <div className={`${styles.detailsElementsContainer}`}>
        <div className={`${styles.detailsElements}`}>
                <h4>First Name: </h4>
                <h4>Prakash</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Last Name: </h4>
                <h4>Raj</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Email: </h4>
                <h4>prakashgwt@gmail.com</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Phone Number: </h4>
                <h4>0123456789</h4>
            </div>
        </div>
        <h3 className={`${styles.passwordChangerHeading}`}>Password Change</h3>
        <div className={`${styles.passwordChangeContainer}`}>
        <form>
        <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="oldPassword">Current Password</label>
        <input type="password" id="oldPassword" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="confirmNewPassword">Confirm New Password</label>
        <input type="password" id="confirmNewPassword" />
        </div>

        <div>
            <Button variant="buttonComponent blueButtonComponent">Change Password</Button>
        </div>
      </div>
      </form>
        </div>

        <div className={`${styles.actionBtnsContainer}`}>
        <Link to="/MyAddresses" style={{ textDecoration: "none" }}>
               <Button variant="buttonComponent blueButtonComponent">View Address (1)</Button>
        </Link>
        <Button variant="buttonComponent blueButtonComponent">Logout</Button>
        </div>
    </div>

  )
}

export default AccountDetails;