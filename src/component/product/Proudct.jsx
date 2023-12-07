import React, { useContext } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CartContext } from '../web/content/cart';


function Proudct() {
  const {ProudctId}=useParams();
  const {addToCartContext} = useContext(CartContext);
  const getproduct = async ()=>{
    
   const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/Proudct/${categoryId}`);
   return data.Proudct;
 
  }
  const {data,isLoading} = useQuery('Proudct',getproduct);
  
  const addToCart = async (ProudctId)=>{
    const res = await addToCartContext(ProudctId);
    console .log(res);
  }

if(isLoading){
  return <h2>loading...</h2>
}
  return (

    <div className='container'>
      {data.subImage.map( (img)=>
     <div className='image' >
      <img src={img.secure_url}/>
      <h2>{product.name}</h2>
      </div>
      )
}
    
    <div>
      <h2>{data.name}</h2>  
      <p>{data.price}</p>
      <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add To Cart</button>
    </div>
    </div>
  )
      }

export default Proudct
