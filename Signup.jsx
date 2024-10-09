import React, { useState } from 'react'
import {auth} from '../Firebase/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Signup = async()=>{
    if(email === "" || password === ""){
      return alert("please fill the all fields")

    }
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password)
      alert("signup successfull")
    }catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <div className='login'>
        <h2>Welcome, User!</h2>
     <p>Please signup in</p>
      <input  value={email} onChange={(e)=> setEmail(e.target.value)} type='text' placeholder='inter your email'></input>
      <input  value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='inter your password'></input>
      <button onClick={Signup} >signup</button>
      <br></br>
      <br />
      <div className='links'>
        <a href="#"> Forgot password</a>
        <a href="/login">Login</a>
      </div>
      {/* <p>Don't have an account? <a href="/login">Login</a></p> */}
    </div>
    </div>
  )
}

export default Signup
