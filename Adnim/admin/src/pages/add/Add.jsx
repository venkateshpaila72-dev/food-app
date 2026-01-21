import React, {useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = ({url}) => {
  
  const[image,setImage]=useState(false);
  const[data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  });
  
  const changeHandler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler= async (event) => {
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);
    const res= await axios.post(`${url}/api/food/add`,formData);
    if(res.data.success){
      setData({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  setImage(false);
  toast.success(res.data.message)
    }
    else{
      toast.error(res.data.message)
    }
    
  } 
  return(
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image? URL.createObjectURL(image):assets.upload_area} alt=""></img>
          </label>
          <input id="image" type='file' hidden required onChange={(e)=>{setImage(e.target.files[0])}}></input>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={changeHandler} value={data.name} type='text' placeholder='Type here' name='name'></input>
        </div>
        <div className="add-product-desc flex-col">
          <p>Product Description</p>
          <textarea onChange={changeHandler} value={data.description} name='description' rows="6" placeholder='"write content here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={changeHandler} value={data.category}  name='category'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={changeHandler} value={data.price}  type="Number" name='price' placeholder='$20' />
          </div>
        </div>
        <button type='Submit' className='add-button'>Add</button>
      </form>

    </div>
  )
}

export default Add
