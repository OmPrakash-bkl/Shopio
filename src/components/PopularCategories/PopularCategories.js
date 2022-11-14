import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './PopularCategories.module.css';
import { CategoryData } from '../Categories/CategoriesData';
import CategoryCardUI from '../UtilityComponents/CategoryCardUI/CategoryCardUI';


function PopularCategories() {
  return (
    <Container fluid>
    <h2 className={`${styles.PopularContainerHeading}`}>Popular Categories</h2>

    <div className={`${styles.cardContainer}`}>

      {
            CategoryData.map((data) => {
              if(data.CategoryType != "Normal") {
                return <CategoryCardUI key={data.CategoryTitle} data={data} />
              }
            })
      }

    </div>
    
    
    </Container>
  )
}

export default PopularCategories