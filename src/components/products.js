import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../RTK/slices/productSlice';
import { addToCart } from '../RTK/slices/cartSlice';


function Products() {
  const products = useSelector((state) => state.products)
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])
  
  return (
    <Container style={{ paddingTop: "4.5rem" }}>
      <Row >
        {
          products.map((product) => {
            return (
              <Col key={product.id}>
                <Card className='p-3' style={{ width: '18rem' }}>
                  <Card.Img style={{ height: "250px" }} variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{ maxHeight: "100px", overflow: "hidden" }}>
                      {product.description}....
                    </Card.Text>
                    <Card.Text>
                      {product.price} $
                    </Card.Text>
                    <Button variant="primary" onClick={() => { dispatch(addToCart(product)) }}>Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Products;