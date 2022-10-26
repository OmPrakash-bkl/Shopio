import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <div className={`${styles.contactUsContainer}`}>
        <h2>Contact Us</h2>
        <div className={`${styles.mapContainer}`}>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe width="80%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=57A%20Cheetham%20Hill%20Road%20MANCHESTER,%20M4%204FS%20United%20Kingdom.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            </div>
            </div>
        </div>
        <div className={`${styles.addressAndNumberContainer}`}>
          <div className={`${styles.addressContainer}`}>
            <span>57A Cheetham Hill Road MANCHESTER,
            M4 4FS United Kingdom.</span>
          </div>
          <div className={`${styles.numberContainer}`}>
            <p>71+ 1234567890</p>
            <p>shopio@gmail.com</p>
          </div>
        </div>
        <div className={`${styles.messageIconContainer}`}>
        <i className='far fa-comments'></i>
        </div>
        <div className={`${styles.contactFormContainer}`}>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
    </div>

  )
}

export default ContactUs;