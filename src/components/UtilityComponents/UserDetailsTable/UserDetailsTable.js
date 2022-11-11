import React from 'react';
import styles from './UserDetailsTable.module.css';

function UserDetailsTable(props) {
  return (
        <div className={`${styles.detailsElements}`}>
            <h4>{props.data.fieldName}: </h4>
            <h4>{props.data.fieldValue}</h4>
        </div>
  )
}

export default UserDetailsTable;