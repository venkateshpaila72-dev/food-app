import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import './List.css'
const List = ({url}) => {

  const [list, setList] = useState([]);
  
//another method  ........................
  // useEffect(() => {
  //   const fetchList = async () => {
  //     try {
  //       const res = await axios.get(`${url}/api/food/list`);
  //       if (res.data.success) {
  //         setList(res.data.data);
  //       } else {
  //         toast.error("Error");
  //       }
  //     } catch (err) {
  //       toast.error("Server error");
  //       console.log(err);
  //     }
  //   };

  //   fetchList();
  // }, []);
  /*---------------------------------------------------------------- */
  //another methid 
  const fetchList= async () => {
    const res= await axios.get(`${url}/api/food/list`);
    if(res.data.success){
      setList(res.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  const removeFood= async (foodId) => {
    const res= await axios.delete(`${url}/api/food/delete`,{data:{id:foodId}});
    await fetchList();
    if(res.data.success){
      toast.success(res.data.message)
    }
    else{
      toast.error("Error")
    }

  }
  
  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>{removeFood(item._id)}} className='cursor'>X</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default List
