import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './TopDealOnElectronics.module.css';
import MobileCover from '../../assets/td_mobileCover.jpg';
import MobileCharger from '../../assets/td_mobileCharger.jpg';
import Router from '../../assets/td_router.jpg';
import Pendrive from '../../assets/td_pendrive.jpg';
import Temper from '../../assets/td_temper.jpg';
import Printer from '../../assets/td_printer.jpg';
import Camera from '../../assets/td_camera.jpg';
import Watch from '../../assets/td_watch.jpg';


function TopDealOnElectronics() {
  return (
    <Container fluid>
    <h2 className={`${styles.TopDealsContainerHeading}`}>Top Deals On 
    Electronics</h2>

    <div className={`${styles.cardContainer}`}>

    <div className={`${styles.cardChildContainers}`}>
        <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={MobileCover} alt="Mobiles Covers" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Spazy Case Pouch for Xiaomi Redmi</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;299</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;499</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={MobileCharger} alt="Mobiles Chargers" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>FLiX Usb Fast Charger,Adapter</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;199</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;499</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Router} alt="Router" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Tenda Wi-Fi Router,VPN (Black)</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;3269</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;4799</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Watch} alt="Apple Watches" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Apple Watch SE Gold Aluminium</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;25999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;28999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Pendrive} alt="Pendrives" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>SanDisk Ultra Flair 64GB USB Pen Drive</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;599</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;799</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Temper} alt="Temper Glasses" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Tempered Glass for iQOO Neo 6 5G</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;299</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;499</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Printer} alt="Printers" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Canon E4570 All-in-One Wi-Fi Ink Printer</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;7999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;8999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    <div className={`${styles.cardChildContainers}`}>
    <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={Camera} alt="Cameras" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Canon E4570 Camera 12MP</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;36999</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;38999</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>
    
    <div className={`${styles.cardChildContainers}`}>
        <div  className={`${styles.offerShower}`}>25% Off</div>
        <img src={MobileCover} alt="Mobiles Covers" />
        <div className={`${styles.starIconContainer}`}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <h2 className={`${styles.cardTitle}`}>Spazy Case Pouch for Xiaomi Redmi</h2>
        <h3 className={`${styles.prodPrice}`}>&#8377;299</h3>
        <h5 className={`${styles.prodOrigiPrice}`}>&#8377;499</h5>
        <div className={`${styles.cardAndWishlistContainer}`}>
            <div title="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div title="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></div>
            <div title="Quick View"><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    </div>

    </div>

    <hr style={{ background: 'blue',
    color: 'blue',
    borderColor: 'lime',
    height: '3px', }} />

    </Container>
  )
}

export default TopDealOnElectronics;