import React from 'react';
import styles from './Signup.module.css';
import Button from '../UtilityComponents/Button/Button';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';

function Signup() {
  return (
    <div className={`${styles.formContainer}`}>
        <PageHeading>Register</PageHeading>
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
            <Button variant="buttonComponent blueButtonComponent">Create Account</Button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default Signup