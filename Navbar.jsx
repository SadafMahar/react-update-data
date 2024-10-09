import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import {NavLink, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ColorSchemesExample(){
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const navigate = useNavigate()
const logout = ()=>{
localStorage.clear("user")
navigate("/login")
}  
return (
<>
<Navbar bg="dark" data-bs-theme="dark" >
<Container>
<Navbar.Brand href="#home" style={{color:'white',fontSize:'30px',fontFamily:"arial"}}><h2>Product </h2></Navbar.Brand>
<Nav className="me-auto">
<Nav.Link href="/" style={{color:'white',fontSize:'20px'}}>Home</Nav.Link>
<Nav.Link href="/signup" style={{color:'white',fontSize:'20px'}}>Signup</Nav.Link>
<Nav.Link href="/login" style={{color:'white',fontSize:'20px'}}>Login</Nav.Link>
<Nav.Link onClick={logout} style={{color:'white',fontSize:'20px', }}>Logout</Nav.Link>
</Nav>
<Row>
<Col xs="auto">
<Nav.Link href="/addproducts">
<Button type="submit" style={{color:'black',fontSize:'20px',background:'white'}}>Add Product</Button>
</Nav.Link>
</Col>
</Row>
</Container>
</Navbar>
</>
  )
}
export default ColorSchemesExample
