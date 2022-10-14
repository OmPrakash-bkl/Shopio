import React from 'react';
import styles from './Signup.module.css';


function Signup() {
  return (
    <div className={`${styles.formContainer}`}>
        <h2>Register</h2>
      <form>
      <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
        </div>
        <div>
            <button className={`${styles.createAccountBtn}`}>Create Account</button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default Signup