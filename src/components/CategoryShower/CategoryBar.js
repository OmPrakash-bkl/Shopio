import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './CategoryBar.module.css';

function CategoryBar() {
  return (
  <Container fluid className={styles.categoryBarContainer}>
  <div className="hstack">
  <div className="d-md-none d-sm-none d-none d-lg-block">

  <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      Search By Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mobiles</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Laptops</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Furnitures</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  <div className={`d-md-none d-sm-none d-none d-lg-block ${styles.categoryButtonsContainer}`}>
    <div>
    <button className={styles.categoryButtons}>Mobiles</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Electronics</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Beauty & Toys</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Furniture</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Grocery</button>
    </div>
    <div>
    <button className={styles.categoryButtons}>Applications</button>
    </div>
  
  </div>
  </div>
  </Container>

  );
}

export default CategoryBar;