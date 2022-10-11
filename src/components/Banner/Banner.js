import React from 'react'
import Container from 'react-bootstrap/Container';
import BannerImg from '../../assets/banner.jpg';

function Banner() {
  return (
    <Container fluid>
        <img src={BannerImg} style={{ width: "100%", margin: "0rem 0rem 1rem 0rem", borderRadius: "1rem" }} alt="Offer banner" />
    </Container>
  )
}

export default Banner