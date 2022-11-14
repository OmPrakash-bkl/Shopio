import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCardUI.module.css';

function Categories(props) {
  return (
        <Link to={props.data.CategoryLink}>
        <div className={`${styles.categoriesInnerContainer}`}>
            <img src={props.data.CategoryImg} alt={props.data.CategoryTitle} />
            <h6>{props.data.CategoryTitle}</h6>
        </div>
        </Link>
  )
}

export default Categories;