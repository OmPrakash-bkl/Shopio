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
        <Dropdown.Item href="#/action-1"><i className='fas fa-mobile-alt'></i> Mobiles</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><i className="fa fa-laptop"></i> Laptops</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><i className="fa fa-plug"></i> Electronics</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><i className='fas fa-bed'></i> Furnitures</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><i className="fa fa-child"></i> Toys</Dropdown.Item>
        <Dropdown.Item href="#/action-3">More ...</Dropdown.Item>
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