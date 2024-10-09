import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import myContext from "../Products_table/Updateproducts/Context/data/myContext";
 const Addproducts = () => {
  const context = useContext(myContext);
  // console.log(context);
  const {products, setproduct, AddProduct} = context;
  return (
    <div>
      <div className="login" >
        <NavLink to={'/'} style={{textDecoration:'none'}}>
        
       <h2> Add product</h2>
        </NavLink>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
        <Form.Label>product title</Form.Label>
        <Form.Control
        value={products.title}
        onChange={(e)=> setproduct({...products, title: e.target.value})}
         type="text" placeholder="Product title" style={{width:'300px'}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product price</Form.Label>
        <Form.Control 
        value={products.price}
        onChange={(e)=> setproduct({...products, price: e.target.value})}
        type="text" placeholder="Product price"  style={{width:'300px'}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ImageUrl</Form.Label>
        <Form.Control 
        value={products.imageUrl}
        onChange={(e)=> setproduct({...products, imageUrl: e.target.value})}
        type="text" placeholder="ImageUrl"   style={{width:'300px'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product category</Form.Label>
        <Form.Control
        value={products.category}
        onChange={(e)=> setproduct({...products, category: e.target.value})}
         type="text" placeholder="Product category"   style={{width:'300px'}}/>
      </Form.Group>
      <Button style={{width:'100%', color:'white',background:'#EF5350',height:'40px'}} onClick={AddProduct} variant='secondary'>Add products</Button>
      </div>
    </div>
  )
  
 }
 export default Addproducts