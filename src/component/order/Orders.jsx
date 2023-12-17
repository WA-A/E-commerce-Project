import { createContext, useState } from "react";
import React from 'react';
import axios from "axios";

export const OrderContext=createContext(null);

export function OrderContextProvider({children}){
    const addtoOrderContext = async (ProudctId)=>{
    try{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`, 
        {headers:{Authorization:`Wasan_${token}`}});
        return data;
   
    }
    catch(error){
        console.log(error);
    }
 }

 
 


   

 return <OrderContext.Provider value={{addtoOrderContext}}>
    {children}
 </OrderContext.Provider>
}