import React, { useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const LoginPopup = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext);

    const[currentState,setCurrentState]=React.useState("Login");
    const [data,setData]=React.useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event)=>{
        const name=event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));

    }

    const onLogin= async (event) => {
        event.preventDefault()
        let newUrl=url;
        if(currentState==="Login"){
            newUrl += "/api/users/login";
        }
        else{
            newUrl += "/api/users/register"
        }

        const res = await axios.post(newUrl,data);
        if(res.data.success){
            setToken(res.data.token);
            localStorage.setItem("token",res.data.token);
            setShowLogin(false);
        }
        else{
            alert(res.data.message);
        }
        
    }


  return (
    <div className='login-popup'>
     <form  onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-input">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' name='name' value={data.name} onChange={onChangeHandler} required/>}
            <input type="email" placeholder='Your Email' name="email" onChange={onChangeHandler} value={data.email} required/> 
            <input type="password" placeholder='Your Password' name='password' onChange={onChangeHandler} value={data.password}  required/>
        </div>
        <button type="submit">
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
