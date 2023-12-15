import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export let UserContext =  createContext();


export default function UserContextProvider({childern}){
    const [userToken,setuserToken]= useState(null);
    const [userData,setuserData] = useState(null);

    const getUserData = async()=>{
        if(userToken){
            const {data}=await axios.get("https://ecommerce-node4.vercel.app/user/profile",
            {headers:{authorization:`Wasan__${userToken}`}})
       console.log(data);
       setuserData(data.user);
        }
    }
useEffect( ()=>{
    getUserData();
},[userToken])
    return <UserContext.Provider value={{userToken,setuserToken ,userData,setuserData}}>
        {childern}
    </UserContext.Provider>
}
