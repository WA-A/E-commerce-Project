import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


function Proudct() {
  const {ProudctId}=useParams();

  const getproduct = async ()=>{
    
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/Proudct/${categoryId}`);
   return data.Proudct;
 
  }
  const {data,isLoading} = useQuery('Proudct',getproduct);
  
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
    </div>
    </div>
  )
      }

export default Proudct
