import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './TopDealOnElectronics.module.css';
import ComponentHeading from '../UtilityComponents/ComponentHeading/ComponentHeading';
import { ProductData } from './TopDealOnElectronicsData';
import ProdCard from '../UtilityComponents/ProdCard/ProdCard';



function TopDealOnElectronics() {
  return (
    <Container fluid>
    <ComponentHeading>Top Deals On 
    Electronics</ComponentHeading>

    <div className={`${styles.cardContainer}`}>

    {
        ProductData.map((data) => {
            return <ProdCard key={data.prodTitle} data={data} />;
        })
    }

    </div>

    <hr style={{ background: 'blue',
    color: 'blue',
    borderColor: 'lime',
    height: '3px', }} />

    </Container>
  )
}

export default TopDealOnElectronics;