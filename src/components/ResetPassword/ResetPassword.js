import React from 'react';
import styles from './ResetPassword.module.css';

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
            <button className={`${styles.ResetBtn}`}>Reset</button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default ResetPassword;