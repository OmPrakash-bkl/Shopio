import React from 'react';
import styles from './SearchBar.module.css';
import FormStyles from './Navbar.module.css';

function SearchBar() {
  return (
    <div className={`${styles.searchBarForMobile}`}>
     <form>
      <input type="search" className={`${FormStyles.searchForm}`}  placeholder='Search products for more offer' />
      <button type="submit" className={`${FormStyles.searchButton}`} >
      <i className="fa fa-search" aria-hidden="true"></i>
      </button>
     </form>
    </div>
  )
}

export default SearchBar