import React, { useState } from 'react';
import AddressForm from './AddressForm';
import styles from './MyAddresses.module.css';
import { Link } from 'react-router-dom';
import Button from '../UtilityComponents/Button/Button';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';
import UserDetailsTable from '../UtilityComponents/UserDetailsTable/UserDetailsTable';
import { userDefaultAddressDetails } from './MyAddressData.js';
import { userSecondaryAddressDetails } from './MyAddressData.js';

function MyAddresses() {

    const [addressForm, setAddressForm] = useState("");

    function formOpener(addressType) {
        setAddressForm(addressType)
    }

    function formCloser() {
        setAddressForm("");
    }

  return (
    <div className={`${styles.addressDetailsContainer}`}>
        <PageHeading>My Addresses</PageHeading>
        
        <div className={`${styles.returnAccContainer}`}>
            <Link to="/MyAccount" style={{ textDecoration: "none" }}>
                <span className={`${styles.returnLink}`}><i className="fa fa-angle-left"></i> Return To Account Details</span>
            </Link>
            <Button variant="buttonComponent blueButtonComponent" onClick={() => formOpener("NewForm")}>Add a New Address</Button>
        </div>

        { addressForm == "NewForm" ? <AddressForm onClose={formCloser} /> : "" }
        

        <h3 className={`${styles.addressTypeHeading}`}>DEFAULT ADDRESS</h3>
        <div className={`${styles.detailsElementsContainer}`}>
            { userDefaultAddressDetails.map((data) => {
                return <UserDetailsTable key={data.fieldName} data={data} />
            }) }
        </div>

        <div className={`${styles.actionBtnsContainer}`}>
        <Button variant="buttonComponent blueButtonComponent" onClick={() => formOpener("DefaultForm")}>Edit</Button>
        <Button variant="buttonComponent blueButtonComponent" onClick={() => formOpener("NewForm")}>Delete</Button>
        </div>

        { addressForm == "DefaultForm" ? <AddressForm onClose={formCloser} /> : "" }
        
        <h3 className={`${styles.addressTypeHeading}`}>SECONDARY ADDRESS</h3>
        <div className={`${styles.detailsElementsContainer}`}>
        { userSecondaryAddressDetails.map((data) => {
                return <UserDetailsTable key={data.fieldName} data={data} />
            }) }
        </div>

        <div className={`${styles.actionBtnsContainer}`}>
        <Button variant="buttonComponent blueButtonComponent" onClick={() => formOpener("SecondaryForm")}>Edit</Button>
        <Button variant="buttonComponent blueButtonComponent" onClick={() => formOpener("NewForm")}>Delete</Button>
        </div>

        { addressForm == "SecondaryForm" ? <AddressForm onClose={formCloser} /> : "" }

    </div>

  )
}

export default MyAddresses;