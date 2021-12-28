import { Navbar, Container, Nav} from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
return (
<>
  <Navbar bg="light" variant="light" fixed="bottom" >
    <Container>
    <Navbar.Brand href="/">Failsdata.com</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/api">API</Nav.Link>
      <Nav.Link href="https://www.paypal.com/paypalme/collinhpreston">Support</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
)
}
export default Footer;