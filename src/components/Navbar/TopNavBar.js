import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './TopNavBar.module.css';
function TopNavBar() {
  return (
  <Container fluid className={styles.topNavBarContainer}>
  <div className="hstack">
  <div className="d-md-none d-sm-none d-none d-lg-block"><h5><a href="#" className={`text-decoration-none ${styles.topNavBarSlogan}`}>Successful Ecommerce, Let's Start Today!</a></h5></div>
  <div className="ms-auto d-md-none fs-6 d-sm-none d-none d-lg-block">
  <a href="#" className="mx-2 text-light"><i className={`fab fa-facebook-f ${styles.socialIconStyles}`}></i></a>
  <a href="#" className="mx-2 text-light"><i className={`fa fa-envelope ${styles.socialIconStyles}`}></i></a>
  <a href="#" className="mx-2 text-light"><i className={`fab fa-whatsapp ${styles.socialIconStyles}`}></i></a>
  </div>
  <div className="vr d-md-none text-light d-sm-none d-none d-lg-block"></div>
  <div className="d-md-none text-light d-sm-none d-none d-lg-block">
  <span className="mx-1 fs-6">shopio@gmail.com</span>
  <div className="vr text-light"></div>
  <span className="mx-1 fs-6">0123456789</span>
  <div className="vr text-light"></div>
  <span className="mx-1 fs-6">0987654321</span>
  </div>
  </div>
  </Container>

  );
}

export default TopNavBar;