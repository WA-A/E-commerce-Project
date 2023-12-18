import React, { useEffect, useState } from 'react'

function pagination() {
    const [page,setPage]=useState(1);
    const [limit,setlimit]=useState();
    //const {PageId}=useParams();

const getAll = async (page,limit)=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products?page=page&limit=limit`);
    return data;
  
   }

   useEffect(
        AllPages = (limit)=>{
        setlimit(++limit);
        return limit;
      }
     
   )
   useEffect(
    CurrentPage = (page)=>{
        setPage(page);
        return page
      }
   )
    
    
   
  
  return (
    <div>pagination</div>
  )
}

export default pagination