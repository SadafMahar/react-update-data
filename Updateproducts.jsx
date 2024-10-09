import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import myContext from './Context/data/myContext';
import { useContext } from 'react';
function Updateproducts () {
    const context = useContext(myContext);
    // console.log(context);
    const {products, setproduct,editproduct } = context;
return (

<div>
<div className='login'>
<NavLink to={'/'} style={{color:'blue',textDecoration:'none'}}>
<h2 style={{color:'blue'}}>
Edit Product 
</h2>
</NavLink>
{/* <Button style={{width:"100%",height:'40px',}} className='but' variant="secondary">Update  Product</Button>{' '} */}

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
      <Button style={{width:"80%"}} onClick={ ()=> editproduct()} variant="secondary">update  Product</Button>{' '}
</div>
</div>
)
}
export default Updateproducts
