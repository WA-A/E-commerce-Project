import React, { useContext } from 'react'
import { OrderContext } from '../content/Order'
import { useQuery } from 'react-query';


function Order() {
    const {getOrderContext} = useContext(OrderContext);
    const getOrder = async ()=>{
        const res = await getOrderContext();
        return res;
    }

    const {data,isLoading}= useQuery("Order",getOrder);
   console.log(data);
   if(isLoading){
    return <h2>loading...</h2>
  }
    return (
        <OrderContext.Provider>
        {children}
     </OrderContext.Provider>
    
  )
}

export default Order