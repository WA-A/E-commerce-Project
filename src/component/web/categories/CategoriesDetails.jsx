import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


function CategoriesDetails() {
  const {categoryId}=useParams();

  const getCategoriesDetails = async ()=>{
    
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/Proudct/categories/${categoryId}`);
   return data.Proudct;
 
  }
  const {data,isLoading} = useQuery('categories_details',getCategoriesDetails);
  
if(isLoading){
  return <h2>loading...</h2>
}
  return (

    <div className='container'>
      {data.length?data.map( (Proudct)=>
     <div className='Proudct' key={Proudct._id}>
      <img src={Proudct.mainImage.secure_url}/>
      <h2>{Proudct.name}</h2>
      </div>
      ):<h2>no Proudct</h2>
}
    </div>
  )
      }

export default CategoriesDetails
