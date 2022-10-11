import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import styles from './PopularCategories.module.css';
import Mobiles from '../../assets/mobiles.jpg';
import Books from '../../assets/books.jpg';
import Dresses from '../../assets/dresses.jpg';
import Shoes from '../../assets/shoes.jpg';
import Laptops from '../../assets/laptops.jpg';
import Electronics from '../../assets/electronics.jpg';
import Furnitures from '../../assets/furnitures.jpg';
import Toys from '../../assets/toys.jpg';

function PopularCategories() {
  return (
    <Container fluid>
    <h2 className={`${styles.PopularContainerHeading}`}>Popular Categories</h2>

    <div className={`${styles.cardContainer}`}>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Mobiles} />
      <Card.Body>
        <Card.Title>Mobiles</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Books} />
      <Card.Body>
        <Card.Title>Books</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Dresses} />
      <Card.Body>
        <Card.Title>Dresses</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Shoes} />
      <Card.Body>
        <Card.Title>Shoes</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Laptops} />
      <Card.Body>
        <Card.Title>Laptops</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Electronics} />
      <Card.Body>
        <Card.Title>Electronics</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Furnitures} />
      <Card.Body>
        <Card.Title>Furnitures</Card.Title>
      </Card.Body>
    </Card>
        </div>

        <div>
    <Card style={{ width: '9rem', margin: '0.2rem 0rem 0.5rem 0rem' }}>
      <Card.Img variant="top" style={{ width: '8.6rem', height: '6rem', margin: '1rem 0.2rem -0.5rem 0.2rem' }}  src={Toys} />
      <Card.Body>
        <Card.Title>Toys</Card.Title>
      </Card.Body>
    </Card>
        </div>

    </div>
    
    
    </Container>
  )
}

export default PopularCategories