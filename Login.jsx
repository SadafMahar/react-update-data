import React, {useState} from 'react'
import {auth} from '../Firebase/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'
// import Navbar from '../Navbar/Navbar'
function Login(){
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const navigate = useNavigate()
 const Login = async()=>{
  if(email === "" || password === ""){
    return alert("please fill the all fields")
  }
  try{
    const user = await signInWithEmailAndPassword(auth,email,password)
    const users = localStorage.setItem("user" , JSON.stringify(user))
    alert("login successfull")
    navigate("/")
     setEmail("");
     setPassword("")
  }catch (error) {
    console.log(error); 
  }
 }
  return (
    <div>
        {/* <Navbar /> */}
     <div className='login'>
      <h2>Welcome, User!</h2>
      <p>Please login in</p>
        <input  value={email} onChange={(e) => setEmail(e.target.value)}  type='text' placeholder='enter your email'></input>
        <input  value={password} onChange={(e)=> setPassword(e.target.value)} 
          type='password' placeholder='enter your password'></input>
        <button  onClick={Login}>login</button>
        <br></br>
      <br />
      <div className='links'>
      <a href="#"> Forgot password</a>
      <a href="/login">Login</a>

      </div>
        </div>
        </div>
        
  )
}

export default Login
