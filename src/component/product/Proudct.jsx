import React, { useContext } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CartContext } from '../web/content/cart';

function Proudct() {
  const {ProudctId}=useParams();
  const {addToCartContext} = useContext(CartContext);
  let [quantity,setQuantity] = useState(0);

  const getproduct = async ()=>{
   const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/Proudcts/${categoryId}`);
   return data.Proudct;
 
  }
  const {data,isLoading} = useQuery('Proudct',getproduct);
  
  const addToCart = async (ProudctId)=>{
    const res = await addToCartContext(ProudctId);
    console .log(res);
  }

  const incraseQuantity= async (ProudctId)=>{
    try{
        const token = localStorage.geItem("userToken");
        const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`, {ProudctId}
    ,{
        headers:{Authorization:`Wasan_${token}`}
        })
        setQuantity(++quantity);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

const decraseQuantity= async (ProudctId)=>{
  try{
      const token = localStorage.geItem("userToken");
      const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`, {ProudctId}
  ,{
      headers:{Authorization:`Wasan_${token}`}
      })
      setQuantity(--quantity);
      return data;
  }
  catch(error){
      console.log(error);
  }
}

const getproductwithid = async ()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/Proudcts/${ProudctId}`);
  return data.Proudct;

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
