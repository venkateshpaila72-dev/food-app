import React, { useContext, useEffect } from 'react'
import './verify.css'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate()
    const verifyPayment = async () =>{
        const res = await axios.post(url+'/api/order/verify',{success,orderId})
        if(res.data.success){
            navigate("/myOrders");
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className='verify'>
        <div className="spinner"></div>
      
    </div>
  )
}

export default Verify
