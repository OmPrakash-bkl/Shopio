import React, { useState } from 'react';
import AddressForm from './AddressForm';
import styles from './MyAddresses.module.css';
import { Link } from 'react-router-dom';

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
        <h2>My Addresses</h2>
        
        <div className={`${styles.returnAccContainer}`}>
            <Link to="/MyAccount" style={{ textDecoration: "none" }}>
                <span className={`${styles.returnLink}`}><i className="fa fa-angle-left"></i> Return To Account Details</span>
            </Link>
            <button className={`${styles.newAddressBtn}`} onClick={() => formOpener("NewForm")} >Add a New Address</button>
        </div>

        { addressForm == "NewForm" ? <AddressForm onClose={formCloser} /> : "" }
        

        <h3 className={`${styles.addressTypeHeading}`}>DEFAULT ADDRESS</h3>
        <div className={`${styles.detailsElementsContainer}`}>
        <div className={`${styles.detailsElements}`}>
                <h4>Name: </h4>
                <h4>Prakash</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Street: </h4>
                <h4>31/A, Prasanna New Colony, Avaniyapuram</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>City: </h4>
                <h4>Madurai</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>State: </h4>
                <h4>Tamil Nadu</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Postal/Zip Code: </h4>
                <h4>625012</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Phone Number: </h4>
                <h4>0123456789</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Country: </h4>
                <h4>India</h4>
            </div>
        </div>

        <div className={`${styles.actionBtnsContainer}`}>
        <button className={`${styles.actionBtns}`} onClick={() => formOpener("DefaultForm")} >Edit</button>
        <button className={`${styles.actionBtns}`}>Delete</button>
        </div>

        { addressForm == "DefaultForm" ? <AddressForm onClose={formCloser} /> : "" }
        
        <h3 className={`${styles.addressTypeHeading}`}>SECONDARY ADDRESS</h3>
        <div className={`${styles.detailsElementsContainer}`}>
        <div className={`${styles.detailsElements}`}>
                <h4>Name: </h4>
                <h4>Prakash</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Street: </h4>
                <h4>31/A, Prasanna Colony 3Rd Street, Avaniyapuram</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>City: </h4>
                <h4>Madurai</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>State: </h4>
                <h4>Tamil Nadu</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Postal/Zip Code: </h4>
                <h4>625012</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Phone Number: </h4>
                <h4>9876543210</h4>
            </div>
            <div className={`${styles.detailsElements}`}>
                <h4>Country: </h4>
                <h4>India</h4>
            </div>
        </div>

        <div className={`${styles.actionBtnsContainer}`}>
        <button className={`${styles.actionBtns}`} onClick={() => formOpener("SecondaryForm")} >Edit</button>
        <button className={`${styles.actionBtns}`}>Delete</button>
        </div>

        { addressForm == "SecondaryForm" ? <AddressForm onClose={formCloser} /> : "" }

    </div>

  )
}

export default MyAddresses;