import React from 'react';
import styles from './AddressForm.module.css';

function AddressForm(props) {

    function formCloser() {
        props.onClose();
    }
  return (
    <div className={`${styles.formContainer}`}>
    
      <form>
      <div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="state">State</label>
        <input type="text" id="state" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="zip">Postal/Zip Code</label>
        <input type="text" id="zip" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" />
        </div>
        <div className={`${styles.formFieldsElementsContainer}`}>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
        </div>
        
        <div className={`${styles.btnContainer}`}>
            <button className={`${styles.addressFormBtn}`}>Submit</button>
            <button className={`${styles.addressFormBtn}`} onClick={formCloser}>Cancel</button>
        </div>
      </div>
      </form>
    </div>

  )
}

export default AddressForm;