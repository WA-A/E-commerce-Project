import { useState } from "react";
import { createContext } from "react";

export let UserContext =  createContext();


export default function UserContextProvider({childern}){
    const [userToken,setuserToken]= useState(null);

    return <UserContext.Provider value={{userToken,setuserToken}}>
        {childern}
    </UserContext.Provider>
}
