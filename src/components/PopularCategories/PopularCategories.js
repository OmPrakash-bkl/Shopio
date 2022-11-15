import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './PopularCategories.module.css';
import { CategoryData } from '../Categories/CategoriesData';
import CategoryCardUI from '../UtilityComponents/CategoryCardUI/CategoryCardUI';
import ComponentHeading from '../UtilityComponents/ComponentHeading/ComponentHeading';


function PopularCategories() {
  return (
    <Container fluid>
      
      <ComponentHeading>Popular Categories</ComponentHeading>

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