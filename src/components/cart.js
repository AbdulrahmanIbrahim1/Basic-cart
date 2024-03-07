import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../RTK/slices/cartSlice";


function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  console.log(cart);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc
  }, 0)
  return (
    <Container style={{ paddingTop: "4.5rem" }}>
      <h1 >Welcome to Cart</h1>
      <Button variant="primary" className="mb-4" onClick={() => { dispatch(clear()) }} > Clear </Button>
      <h4>Total price : {totalPrice}$</h4>

      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td> <Image src={product.image} alt="alt" style={{ width: "100px", height: "100px" }} /> </td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td><Button variant="danger" onClick={() => { dispatch(deleteFromCart(product)) }}>Delete</Button> </td>
              </tr>

            )
          })}

        </tbody>
      </Table>




    </Container>
  )
}


export default Cart;