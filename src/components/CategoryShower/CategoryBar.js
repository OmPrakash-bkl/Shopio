import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import styles from './CategoryBar.module.css';

const mobileCategories = {
  title: "Mobiles",
  categoriesList: ["Apple", "Realme", "Redmi", "Lenovo", "Oppo", "Nokia", "Samsung", "Sony"]
}

const laptopCategories = {
  title: "Laptops",
  categoriesList: ["Apple", "Acer", "AGB", "Lenovo", "HP", "DEEQ", "Alienware", "Honor"]
}

const electronicCategories = {
  title: "Electronics",
  categoriesList: ["Apple Watch", "Digital Camera", "Earbuds", "Calculator", "Tablets", "PSP", "Iron Box", "Washing Machine"]
}

const furnitureCategories = {
  title: "Furniture",
  categoriesList: ["Chair", "TV Units", "Sofas", "Dining Tables", "Beds", "Bean Bags", "Shoe Racks", "Bulbs"]
}

const toysCategories = {
  title: "Toys",
  categoriesList: ["RC Drones", "RC Helicopters", "Playstations", "Bat", "Football", "Basket Balls", "Spinner", "Board Games"]
}


function CategoryBar() {

  const [showDropdown, setshowDropdown ] = useState(false);
  const [showCategoryRelatedProdList, setShowCategoryRelatedProdList] = useState(false);
  const [categories, setCategories] = useState(mobileCategories);

  function dropdownShower() {
    setshowDropdown(!showDropdown);
  }

  function categoryRelatedProdListShower(category) {
    if(category !== "") {
      setCategories(category);
      console.log(category);
    } else {
      setCategories(categories);
    }
    setShowCategoryRelatedProdList(true);
  }

  function categoryRelatedProdListDisabler() {
    setShowCategoryRelatedProdList(false);
  }

  return (
  <Container fluid className={styles.categoryBarContainer}>
  <div className="hstack">
  <div className="d-md-none d-sm-none d-none d-lg-block">

    <div className={`${styles.dropdownContainer}`} onClick={dropdownShower}>
      <button><span>Search By Categories</span> <i className={`${ showDropdown ? 'fa fa-chevron-up' : 'fa fa-chevron-down' }`}></i></button>

      <div className={`${!showDropdown ? styles.dropdownElementsContainer : styles.dropdownElementsContainer_active }`} onMouseEnter={() => categoryRelatedProdListShower(categories)} onMouseLeave={categoryRelatedProdListDisabler} >

        <div className={`${styles.dropdownElementsInnerContainer}`} onMouseEnter={() => categoryRelatedProdListShower(mobileCategories)} onClick={categoryRelatedProdListDisabler}>
                <div>
                <i className='fas fa-mobile-alt'></i>
                </div>
               <div>
               Mobiles
               </div>
        </div>

       <div className={`${styles.dropdownElementsInnerContainer}`} onMouseEnter={() => categoryRelatedProdListShower(laptopCategories)} onClick={categoryRelatedProdListDisabler}>
                <div>
                <i className="fa fa-laptop"></i>
                </div>
               <div>
               Laptops
               </div>
        </div>

       <div className={`${styles.dropdownElementsInnerContainer}`} onMouseEnter={() => categoryRelatedProdListShower(electronicCategories)} onClick={categoryRelatedProdListDisabler}>
                <div>
                <i className="fa fa-plug"></i>
                </div>
               <div>
               Electronics
               </div>
        </div>

       <div className={`${styles.dropdownElementsInnerContainer}`} onMouseEnter={() => categoryRelatedProdListShower(furnitureCategories)} onClick={categoryRelatedProdListDisabler}>
                <div>
                <i className='fas fa-bed'></i>
                </div>
               <div>
               Furniture
               </div>
        </div>

       <div className={`${styles.dropdownElementsInnerContainer}`} onMouseEnter={() => categoryRelatedProdListShower(toysCategories)} onClick={categoryRelatedProdListDisabler}>
                <div>
                <i className="fa fa-child"></i>
                </div>
               <div>
               Toys
               </div>
        </div>

       <div className={`${styles.dropdownElementsInnerContainer}`} onMouseEnter={() => categoryRelatedProdListShower(mobileCategories)} onClick={categoryRelatedProdListDisabler}>
                <div>
                ...
                </div>
               <div>
               More
               </div>
        </div>


      </div>

      <div className={`${styles.elementsRelatedCategoryContainer} ${showCategoryRelatedProdList ? styles.elementsRelatedCategoryContainer_active : styles.elementsRelatedCategoryContainer_disabled } `} onMouseEnter={() => categoryRelatedProdListShower(categories) } onMouseLeave={categoryRelatedProdListDisabler}  onClick={categoryRelatedProdListDisabler}>

        <div className={`${styles.elementsRelatedCategoryInnerContainer}`}>
          <span>{categories.title}</span>
          <ul>
            { categories.categoriesList.map((category, index) => {
              return <li key={index}>{category}</li>
            }) }
          </ul>
        </div>

      </div>

    </div>


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