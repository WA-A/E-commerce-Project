import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';


function Categories() {
  
  const getCategories = async ()=>{
    
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
   return data;
 
  }
  const {data,isLoading} = useQuery('web_categories',getCategories);
  
if(isLoading){
  return <h2>loading...</h2>
}
  return (

    <div className='container'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.categories.length?data?.categories.map( (category)=>
      <SwiperSlide key={category._id}>
        <Link to={`/products/category/${category._id}`}>
      <img src={category.image.secure_url}/>
      <h2>{category.name}</h2>
      </Link>
      </SwiperSlide>
        ):'<h2>no category found</h2>'
        }
    </Swiper>
 
    </div>
  )
}

export default Categories
