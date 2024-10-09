import React, {useContext} from "react";
import  Table  from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import myContext from "./Updateproducts/Context/data/myContext";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const ProductsTable = () => {
const context = useContext(myContext)
const {allProducts,  deleteProduct, editProductHandle, search, setSearch} = context;
const alProductFilter = allProducts.filter((obj)=> obj.title.toLowerCase().includes(search))
return (
<div>
<>
    <div className="logi" >
    {/* <h3>pleas inter your  item search</h3> */}
<InputGroup className="mb-3">

        <Form.Control
        value={search}
        onChange={(e)=> setSearch(e.target.value)} 
         aria-label="Text input with checkbox" placeholder='search '  style={{border:'2px solid black' }}/>
      </InputGroup>
      
      </div >

<div style={{ alignItems:'center',paddingLeft:'450px',fontSize:'15px',width:'40%',}}>
<Table striped bordered hover  style={{border:'5px solid green', }}>
<thead>
<tr>
<th style={{color:'black'}}>#</th>
<th>product Image</th>
<th>product Name</th>
<th>price</th>
<th> category</th>
<th>Action</th>
<th>Action</th>
</tr>
</thead>

<tbody>
{alProductFilter.length > 0 ? alProductFilter.map((item,index)=>{
        const {title, price,  category, imageUrl} = item;
        return(
        <tr key={index} style={{color:'red'}}>
        <td>{index + 1}</td>
        <td><img width={70} src={imageUrl} /></td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{ category}</td>
        <td>
        <Button 
        onClick={()=>  deleteProduct(item)}
 variant="outline-danger">Delete</Button>
        </td>
        <td><NavLink to={"/updateproducts"}>
        <Button 
        onClick={()=> editProductHandle(item)}
        style={{width:'80px'}} variant="outline-success">Edit</Button>
        </NavLink>
        </td>
        </tr>
        )
        }) : <h1> product is not found</h1>}
</tbody>
</Table>

</div>

</>
</div>

)
}
export default ProductsTable