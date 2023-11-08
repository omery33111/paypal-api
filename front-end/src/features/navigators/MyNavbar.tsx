import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">

            <Container>

            <Nav>

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>

            <Nav.Link href = "/products">Products</Nav.Link>
            
            <Nav.Link href = "/cart">Cart</Nav.Link>

            </Nav>
        
            </Container>

        </Navbar>


    </div>
  )
}

export default MyNavbar