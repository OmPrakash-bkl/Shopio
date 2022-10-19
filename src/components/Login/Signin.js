import React from 'react';
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className={`${styles.formContainer}`}>
        <h2>Login</h2>
      <form>
      <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        </div>
        <div>
          <Link to="/RecoverAccount" className={`${styles.loginPageLinks}`}>Forgot your password?</Link>
          <Link to="/Register" className={`${styles.loginPageLinks}`}>Register?</Link>
        </div>
        <div>
            <button className={`${styles.loginBtn}`}>Login</button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default Signin;