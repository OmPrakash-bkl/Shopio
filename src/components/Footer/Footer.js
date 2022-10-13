import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.css';
import Logo from '../../assets/favicon.png';

function CustomerInfo() {
  return (
    <Container fluid className={`${styles.footerContainer}`}>
       <Row>
        <Col md={12} lg={3} sm={6} xs={12}>
        <div className={`${styles.companyAddressContainer}`}>
            <img src={`${Logo}`} className={`${styles.shopioLogo}`} alt="Shopio Logo" />
            <h4>57A Cheetham Hill Road MANCHESTER, M4 4FS United Kingdom.</h4>
            <h5>71+ 1234567890,</h5>{' '}
            <h5>71+ 0987654321</h5>
            <div className={`${styles.navIconsContainer}`}>
                <span><i className="fab fa-facebook-f"></i></span>
                <span><i className="fab fa-instagram"></i></span>
                <span><i className="fab fa-twitter"></i></span>
                <span><i className="fab fa-whatsapp"></i></span>
            </div>
        </div>
        </Col>
        <Col md={4} lg={3} sm={6} xs={12}>
        <h4>Corporate Info</h4>
        <ul className={`${styles.footerNavLinkContainer}`}>
            <li>Who We Are</li>
            <li>Corporate Responsibility</li>
            <li>Indian Sales Laws</li>
            <li>Careers</li>
        </ul>
        </Col>
        <Col md={4} lg={3} sm={6} xs={12}>
        <h4>My Account</h4>
        <ul className={`${styles.footerNavLinkContainer}`}>
            <li>Sitemap</li>
            <li>Feedback</li>
            <li>My Account</li>
            <li>Advanced Search</li>
        </ul>
        </Col>
        <Col md={4} lg={3} sm={6} xs={12}>
        <h4>Need Help</h4>
        <ul className={`${styles.footerNavLinkContainer}`}>
            <li>Order Tracking</li>
            <li>Make Report</li>
            <li>Payments & Returns</li>
            <li>Size Guide</li>
        </ul>
        </Col>
      </Row>

      <hr style={{ background: 'black',
    color: 'black',
    borderColor: 'gray',
    height: '2px', margin: "0rem" }} />

    <div className={`${styles.copyWriteContainer}`}>Shopio &#169; 2022 | Developed By GreenWill Techs</div>

    </Container>
  );
}

export default CustomerInfo;