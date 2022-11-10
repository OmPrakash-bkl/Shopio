import React from 'react';
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';
import Button from '../UtilityComponents/Button/Button';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';


function Signin() {
  return (
    <div className={`${styles.formContainer}`}>
        <PageHeading>Login</PageHeading>
      <form>
      <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        </div>
        <div>
          <Link to="/RecoverAccount" className={`${styles.loginPageLinks}`}>Forgot your password?</Link>
          <Link to="/Register" className={`${styles.loginPageLinks}`}>Register?</Link>
        </div>
        <div>
            <Button variant="buttonComponent blueButtonComponent">Login</Button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default Signin;