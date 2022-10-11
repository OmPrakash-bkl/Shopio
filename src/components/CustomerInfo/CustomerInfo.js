import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './CustomerInfo.module.css';

function CustomerInfo() {
  return (
    <Container fluid className={`${styles.customerInfoContainer}`}>
      <Row>
        <Col className={`d-none d-sm-none d-md-none d-lg-none d-xl-block`}>
        <Row>
            <Col>
            <h5 className="mb-0"><i className="fa fa-truck"></i> Free Shopping & Return</h5>
            <p>Free shopping over $100.</p>
            </Col>
        </Row>
        </Col>
        <Col className={`d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
        <Row>
            <Col>
            <h5 className="mb-0"><i className="fa fa-dollar"></i> Money Back Guarantee</h5>
            <p>100% Money back guarantee.</p>
            </Col>
        </Row>
        </Col>
        <Col className={`d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
        <Row>
            <Col>
            <h5 className="mb-0"><i className="fa fa-clock-o"></i> Online Support 24/7</h5>
            <p>We can serve you better.</p>
            </Col>
        </Row>
        </Col>
        <Col className={`d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
        <Row>
            <Col>
            <h5 className="mb-0"><i className="fa fa-credit-card"></i> Secure Payment</h5>
            <p>Secure your future.</p>
            </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerInfo;