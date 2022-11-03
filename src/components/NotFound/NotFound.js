import React from 'react';
import notFound1 from '../../assets/not_found_image1.png';
import notFound2 from '../../assets/not_found_image2.png';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={`${styles.not_found_container}`}>
       
            <div className={`${styles.not_found_inner_container_1}`}>
                <center>
                 <img src={notFound1}  className={`${styles.notFoundImg1}`} alt="my web not found image" />
                </center>
                <h3>We're sorry — something has gone wrong on our end.</h3>
                <p>If difficulties persist, please contact the System Administrator of this site and report the error below.</p>
                <Link to="/"><button className={`${styles.backToHomeBtn}`}><i className="fas fa-home"></i> BACK TO HOME</button></Link>
             </div>
     
             <div className={`${styles.not_found_inner_container_2}`}>
              <center>
                 <img src={notFound2} className={`${styles.notFoundImg2}`} alt="my web not found image" />
              </center>
             </div>
       
    </div>
  )
}

export default NotFound;