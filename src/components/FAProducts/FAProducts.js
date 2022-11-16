import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './FAProducts.module.css';
import { ProductData } from './FAProductsData';
import ProdCard from '../UtilityComponents/ProdCard/ProdCard';

function FAProducts() {
  return (
    <Container fluid>
    <div className={`${styles.cardContainer}`}>

    {
        ProductData.map((data) => {
            return <ProdCard key={data.prodTitle} data={data} />;
        })
    }

    </div>

    </Container>
  )
}

export default FAProducts;