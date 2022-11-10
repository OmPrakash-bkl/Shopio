import React from 'react';
import styles from './RecoverAccount.module.css';
import Button from '../UtilityComponents/Button/Button';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';

function RecoverAccount() {
  return (
    <div className={`${styles.formContainer}`}>
        <PageHeading>Recover Account</PageHeading>
      <form>
      <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
        </div>
        <div>
            <Button variant="buttonComponent blueButtonComponent">Recover</Button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default RecoverAccount;