import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './NewsLetterSignup.module.css';

function AutoLayoutExample() {
  return (
    <Container fluid className={`${styles.NewsLetterSignupContainer}`}>
      <Row>
        <Col xl={5} md={5} >
        <h2 className={`${styles.NewsLetterSignupContainerHeading}`}>SignUp To Newsletter </h2>
        </Col>
        <Col xl={5} md={7}>
        <div className={`${styles.NewsLetterSignupFormContainer}`}>
        <form>
            <input type="email" placeholder="Enter Your Email" />
            <button>SignUp</button>
        </form>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;