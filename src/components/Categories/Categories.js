import React from 'react';
import styles from './Categories.module.css';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';
import { CategoryData } from './CategoriesData';
import CategoryCardUI from '../UtilityComponents/CategoryCardUI/CategoryCardUI';

function Categories() {
  return (
    <>
    <PageHeading>All Categories</PageHeading>
    <div className={`${styles.categoriesContainer}`}>

        {
            CategoryData.map((data) => {
                return <CategoryCardUI key={data.CategoryTitle} data={data} />
            })
        }

    </div>
    </>
  )
}

export default Categories