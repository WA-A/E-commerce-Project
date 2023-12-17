import { createContext, useState } from "react";
import React from 'react';
import axios from "axios";

export const CartContext=createContext(null);

export function CartContextProvider({children}){
    let [count,setCount] = useState(0);
    const addtoCartContext = async (ProudctId)=>{
    try{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`, 
       // {ProudctId},
        {headers:{Authorization:`Wasan_${token}`}});
        return data;
   
    }
    catch(error){
        console.log(error);
    }
 }

 const getCartContext = async (ProudctId)=>{
    try{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, 
        {headers:{Authorization:`Wasan_${token}`}});
        setCount(data.count);
        return data;
   
    }
    catch(error){
        console.log(error);
    }
 }
 const removeItemContext= async (ProudctId)=>{
    try{
        const token = localStorage.geItem("userToken");
        const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`, {ProudctId}
    ,{
        headers:{Authorization:`Wasan_${token}`}
        })
        setCount(++count);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

const ClearCart= async (ProudctId)=>{
    try{
        const token = localStorage.geItem("userToken");
        const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`, {ProudctId}
    ,{
        headers:{Authorization:`Wasan_${token}`}
        })
        setCount([]);  // count = 0
        return data;
    }
    catch(error){
        console.log(error);
    }
}
   

 return <CartContext.Provider value={{addtoCartContext,getCartContext,removeItemContext,count}}>
    {children}
 </CartContext.Provider>
}