import React from 'react';
import styles from './ComponentHeading.module.css';


function ComponentHeading(props) {
  return (
    <h2 className={`${styles.PopularContainerHeading}`}>{props.children}</h2>
  )
}

export default ComponentHeading;