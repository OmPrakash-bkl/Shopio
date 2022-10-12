import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Electronics from '../../assets/tc_electronics.jpg';
import Furniture from '../../assets/tc_furnitures.jpg';
import Cloths from '../../assets/tc_cloths.jpg';
import Bags from '../../assets/tc_bags.jpg';
import Books from '../../assets/books.jpg';
import Cosmetics from '../../assets/tc_nailpolish.jpg';
import styles from './TopCategoriesShower.module.css';

function TopCategoriesShower() {
  return (
    <Container fluid className={`${styles.topCategoryParentContainer}`}>

      <Row className={`${styles.topCategoryContainer}`}>

        <Col className={`${styles.topCategoryInnerContainers}`}>
           <Row>
            <Col xl={6} ><img src={Electronics} style={{ width: "11rem", height: "11rem", margin: "1rem auto", display: "block" }} alt="Electronics" /></Col>
            <Col xl={6}>
            <ul className={`${styles.borderless}`}>
            <h4 className={`${styles.topCategoryHeadingText}`}>Electronics</h4>
            <li className="list-group-item">TV</li>
            <li className="list-group-item">Washing Machine</li>
            <li className="list-group-item">Air Conditioners</li>
            <li className="list-group-item">Refridgerators</li>
            <li className="list-group-item">Fan</li>
            <b className={`${styles.topCategoryViewAllText}`}>View All</b>
            </ul>
            </Col>
           </Row>
        </Col>

        <Col className={`${styles.topCategoryInnerContainers}`}>
           <Row>
            <Col xl={6} ><img src={Furniture} style={{ width: "11rem", height: "11rem", margin: "1rem auto", display: "block"  }} alt="Furniture" /></Col>
            <Col xl={6} >
            <ul className={`${styles.borderless}`}>
            <h4 className={`${styles.topCategoryHeadingText}`}>Furnitures</h4>
            <li className="list-group-item">Beds</li>
            <li className="list-group-item">Sofa</li>
            <li className="list-group-item">Coffee Tables</li>
            <li className="list-group-item">Bean Bags</li>
            <li className="list-group-item">Bed Sheets</li>
            <b className={`${styles.topCategoryViewAllText}`}>View All</b>
            </ul>
            </Col>
           </Row>
        </Col>

        <Col>
           <Row>
            <Col xl={6} ><img src={Cloths} style={{ width: "11rem", height: "11rem", margin: "1rem auto", display: "block"  }}  alt="Cloths" /></Col>
            <Col xl={6} >
            <ul className={`${styles.borderless}`}>
            <h4 className={`${styles.topCategoryHeadingText}`}>Cloths</h4>
            <li className="list-group-item">T-Shirts</li>
            <li className="list-group-item">Formal Shirts</li>
            <li className="list-group-item">Casual Shirts</li>
            <li className="list-group-item">Sarees</li>
            <li className="list-group-item">Blouse</li>
            <b className={`${styles.topCategoryViewAllText}`}>View All</b>
            </ul>
            </Col>
           </Row>
        </Col>

      </Row>

      <Row>

        <Col className={`${styles.topCategoryInnerContainers}`}>
           <Row>
            <Col xl={6} ><img src={Bags} style={{ width: "11rem", height: "11rem", margin: "1rem auto", display: "block"  }} alt="Bags" /></Col>
            <Col xl={6} >
            <ul className={`${styles.borderless}`}>
            <h4 className={`${styles.topCategoryHeadingText}`}>Bags</h4>
            <li className="list-group-item">Laptop Bags</li>
            <li className="list-group-item">Basket Bags</li>
            <li className="list-group-item">Battery Bags</li>
            <li className="list-group-item">School Bags</li>
            <li className="list-group-item">Collge Bags</li>
            <b className={`${styles.topCategoryViewAllText}`}>View All</b>
            </ul>
            </Col>
           </Row>
        </Col>

        <Col className={`${styles.topCategoryInnerContainers}`}>
           <Row>
            <Col xl={6} ><img src={Books} style={{ width: "11rem", height: "11rem", margin: "1rem auto", display: "block"  }} alt="Books" /></Col>
            <Col xl={6} >
            <ul className={`${styles.borderless}`}>
            <h4 className={`${styles.topCategoryHeadingText}`}>Books</h4>
            <li className="list-group-item">Historical Books</li>
            <li className="list-group-item">Fantasy Books</li>
            <li className="list-group-item">Classics Books</li>
            <li className="list-group-item">Finance Books</li>
            <li className="list-group-item">Mystery Books</li>
            <b className={`${styles.topCategoryViewAllText}`}>View All</b>
            </ul>
            </Col>
           </Row>
        </Col>

        <Col>
           <Row>
            <Col xl={6} ><img src={Cosmetics} style={{ width: "11rem", height: "11rem", margin: "1rem auto", display: "block"  }}  alt="Cosmetics" /></Col>
            <Col xl={6} >
            <ul className={`${styles.borderless}`}>
            <h4 className={`${styles.topCategoryHeadingText}`}>Cosmetics</h4>
            <li className="list-group-item">Lipsticks</li>
            <li className="list-group-item">Hair Oils</li>
            <li className="list-group-item">Eyeliner</li>
            <li className="list-group-item">Beauty Creams</li>
            <li className="list-group-item">Nail Polish</li>
            <b className={`${styles.topCategoryViewAllText}`}>View All</b>
            </ul>
            </Col>
           </Row>
        </Col>

      </Row>


    </Container>
  )
}

export default TopCategoriesShower