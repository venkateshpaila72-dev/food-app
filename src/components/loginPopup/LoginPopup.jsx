import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState]=React.useState("Login");

  return (
    <div className='login-popup'>
     <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-input">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your Email' required/> 
            <input type="password" placeholder='Your Password' required/>
        </div>
        <button>
            {currentState==="Sign up"?"Create Account":"Login"}
        </button>
        <div className="lognin-poppup-condition">
            <input type="checkbox" required />
            <p>BY continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"?
        <p>Create a new Account ?<span onClick={()=>setCurrentState("Sign up")}>Click here</span></p> :
        <p>Already have an Account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
     </form>
    </div>
  )
}

export default LoginPopup
