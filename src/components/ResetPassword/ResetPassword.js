import React from 'react';
import styles from './ResetPassword.module.css';
import Button from '../UtilityComponents/Button/Button';

function ResetPassword() {
  return (
    <div className={`${styles.formContainer}`}>
        <h2>Reset Password</h2>
      <form>
      <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="resetPass">Reset Password</label>
        <input type="text" id="resetPass" />
        </div>
        <div>
            <Button variant="buttonComponent blueButtonComponent">Reset</Button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default ResetPassword;