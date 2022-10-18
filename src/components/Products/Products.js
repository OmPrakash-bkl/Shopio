import React, { useState } from 'react';
import styles from './Products.module.css';
import Banner from '../../assets/productPageBanner.jpg';
import prodStyles from '../BestSellingProducts/BestSellingProducts.module.css';
import Tablets from '../../assets/bs_tablets.jpg';

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
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='price_01'>Min Price <i class="fa fa-arrow-down"></i></label>
                    <div className={`${styles.priceRangeContainer}`}>
                      <span>0Rs</span>
                      <span>10000Rs</span>
                    </div>
                    <input type="range" className={`${styles.priceRanger}`} id="price_01" />
                    </div>
                    <div>
                    <label className={`${styles.formInputCheckboxLabel}`} htmlFor='price_02'>Max Price <i class="fa fa-arrow-down"></i></label>
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

        <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>

      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>


      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>


      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>


      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>


      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>

      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>


      <div className={`${prodStyles.cardChildContainers}`}>
           <div  className={`${prodStyles.offerShower}`}>25% Off</div>
        <img src={Tablets} alt="Tablets" />
        <div className={`${prodStyles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${prodStyles.cardTitle}`}>Lenovo Tablet with The Google Assistant</h2>
        <h3 className={`${prodStyles.prodPrice}`}>&#8377;29999</h3>
        <h5 className={`${prodStyles.prodOrigiPrice}`}>&#8377;31999</h5>
        <div className={`${prodStyles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
      </div>

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