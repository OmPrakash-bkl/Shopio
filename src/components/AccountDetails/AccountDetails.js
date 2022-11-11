import React from 'react';
import styles from './AccountDetails.module.css';
import Button from '../UtilityComponents/Button/Button';
import { Link } from 'react-router-dom';
import Dammy_Dp from '../../assets/dammy_dp.jpg';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';
import { userPersonalDetails } from './AccountDetailsData';
import UserDetailsTable from '../UtilityComponents/UserDetailsTable/UserDetailsTable';

function AccountDetails() {
  return (
    <div className={`${styles.accountDetailsContainer}`}>
        <PageHeading>My Account</PageHeading>
        <img src={Dammy_Dp}  className={`${styles.userDp}`} alt="User Profile Picture" />
        <div className={`${styles.detailsElementsContainer}`}>
        { userPersonalDetails.map((data) => {
          return <UserDetailsTable key={data.fieldName} data={data} />
        }) }
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