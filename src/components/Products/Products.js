import React, { useState } from 'react';
import styles from './Products.module.css';
import Banner from '../../assets/productPageBanner.jpg';
import { ProductData } from './ProductsData';
import ProdCard from '../UtilityComponents/ProdCard/ProdCard';


function Products() {

  const [showSortBy, setShowSortBy] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  function sortByContainerShower() {
    setShowSortBy(!showSortBy);
  }

  function filterContainerShower() {
    console.log("df")
    setShowFilter(!showFilter);
  }

  return (
    <div className={`${styles.productsParentContainer}`}>
      <div className={`${styles.filterContainer} ${ showFilter ? styles.filterContainer_active : styles.filterContainer_disabled }`}>

        <div className={`${styles.filterContainerHeading}`}>
          <h3>Filter</h3>
          <button onClick={filterContainerShower}><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>All Categories <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="checkbox" id="all_categories_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='all_categories_01'>Mobiles</label>
                    </div>
                    <div>
                    <input type="checkbox" id="all_categories_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='all_categories_02'>Laptops</label>
                    </div>
                    <div>
                    <input type="checkbox" id="all_categories_03" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='all_categories_03'>Electronics</label>
                    </div>
                    <div>
                    <input type="checkbox" id="all_categories_04" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='all_categories_04'>Furniture</label>
                    </div>
                    <div>
                    <input type="checkbox" id="all_categories_05" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='all_categories_05'>Toys</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Brand <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="checkbox" id="brand_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='brand_01'>Apple</label>
                    </div>
                    <div>
                    <input type="checkbox" id="brand_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='brand_02'>Nokia</label>
                    </div>
                    <div>
                    <input type="checkbox" id="brand_03" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='brand_03'>Oppo</label>
                    </div>
                    <div>
                    <input type="checkbox" id="brand_04" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='brand_04'>Vivo</label>
                    </div>
                    <div>
                    <input type="checkbox" id="brand_05" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='brand_05'>Blackberry</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Price <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='price_01'>Min Price <i className="fa fa-arrow-down"></i></label>
                    <div className={`${styles.priceRangeContainer}`}>
                      <span>0Rs</span>
                      <span>10000Rs</span>
                    </div>
                    <input type="range" className={`${styles.priceRanger}`} id="price_01" />
                    </div>
                    <div>
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='price_02'>Max Price <i className="fa fa-arrow-down"></i></label>
                    <div className={`${styles.priceRangeContainer}`}>
                      <span>0Rs</span>
                      <span>10000Rs</span>
                    </div>
                    <input type="range" className={`${styles.priceRanger}`} id="price_02" />
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Color <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="checkbox" id="color_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='color_01'>White</label>
                    </div>
                    <div>
                    <input type="checkbox" id="color_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='color_02'>Red</label>
                    </div>
                    <div>
                    <input type="checkbox" id="color_03" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='color_03'>Black</label>
                    </div>
                    <div>
                    <input type="checkbox" id="color_04" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='color_04'>Green</label>
                    </div>
                    <div>
                    <input type="checkbox" id="color_05" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='color_05'>Violet</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Rating <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="checkbox" id="rating_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='rating_01'>Below 5</label>
                    </div>
                    <div>
                    <input type="checkbox" id="rating_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='rating_02'>Below 4</label>
                    </div>
                    <div>
                    <input type="checkbox" id="rating_03" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='rating_03'>Below 3</label>
                    </div>
                    <div>
                    <input type="checkbox" id="rating_04" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='rating_04'>Below 2</label>
                    </div>
                    <div>
                    <input type="checkbox" id="rating_05" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='rating_05'>Below 1</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Size <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="checkbox" id="size_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='size_01'>Small</label>
                    </div>
                    <div>
                    <input type="checkbox" id="size_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='size_02'>Medium</label>
                    </div>
                    <div>
                    <input type="checkbox" id="size_03" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='size_03'>Large</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Availability <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="radio" name="avail" id="availability_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='availability_01'>In Stock</label>
                    </div>
                    <div>
                    <input type="radio" name="avail" id="availability_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='availability_02'>Out Of Stock</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className={`${styles.filterSectionContainer}`}>
              <div className={`${styles.filterSectionElements}`}>
                <button className={`${styles.elementsHeading}`}>Gender <i className="fa fa-angle-down"></i></button>
                <div className={`${styles.filterFormContainer}`}>
                  <form>
                    <div>
                    <input type="radio" name="gender" id="gender_01" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='gender_01'>Male</label>
                    </div>
                    <div>
                    <input type="radio" name="gender" id="gender_02" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='gender_02'>Female</label>
                    </div>
                    <div>
                    <input type="radio" name="gender" id="gender_03" />
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='gender_03'>Both</label>
                    </div>
                  </form>
                </div>
              </div>
          </div>

      </div>
      <div className={`${styles.productsContainer}`}>
        <div className={`${styles.productsContainerHeader}`}>
          <div className={`${styles.productsHeaderLeft}`}>
          <button onClick={filterContainerShower}><i className="fa fa-filter" aria-hidden="true"></i></button>{ `|` }
          <button onClick={sortByContainerShower}>Sort By <i className="fa fa-sort" aria-hidden="true"></i></button>
             <div className={`${styles.sortByContainer} ${!showSortBy ? styles.sortByContainer_disabled : styles.sortByContainer_active }`}>
              <button>Alphabetically A - Z</button>
              <button>Alphabetically Z - A</button>
              <button>Price, Low - High</button>
              <button>Price, High - Low</button>
             </div>
          </div>
          <div className={`${styles.productsHeaderRight}`}>
            View: <input type="number" defaultValue={8} min={10} max={60} />
          </div>
        </div>
        <div className={`${styles.imgContainer}`}>
          <img src={Banner}  alt="banner image" />
        </div>

        <div className={styles.productsListContainer}>

          
    {
        ProductData.map((data) => {
            return <ProdCard key={data.prodTitle} data={data} />;
        })
    }

        </div>

        <div className={`${styles.paginationContainer}`}>
          <button><i className="fa fa-angle-double-left"></i></button>
          <button><i className="fa fa-angle-left"></i></button>
          <button>1</button>
          <button className={`${styles.paginationBtn_active}`}>2</button>
          <button>3</button>
          <button><i className="fa fa-angle-right"></i></button>
          <button><i className="fa fa-angle-double-right"></i></button>
        </div>

      </div>
    </div>
  )
}

export default Products