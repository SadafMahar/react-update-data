import React from 'react'
// import { Navbar } from 'react-bootstrap'
// import  Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
// import Addproducts from './Navbar/Addproducts/Addproducts'

import Updateproducts from './Navbar/Products_table/Updateproducts/Updateproducts'
import Mystate from './Navbar/Products_table/Updateproducts/Context/data/Mysatae'
import Addproducts from './Navbar/Addproducts/Addproducts'
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Mystate>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        {/* <Route path="/addproducts"  element={<Addproducts />} /> */}
        <Route path='/addproducts' element={<Addproducts />}/>
        <Route path='/updateproducts' element={<Updateproducts />}/>
      </Routes>
      </Mystate>
    </div>
  )
}

export default App
