import React, { useContext, useState } from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import WebLayout from './component/Layout/WebLayout.jsx';
import Home from './component/web/home/Home';
import Categories from './component/web/categories/Categories.jsx';
import DashbordLayout from './component/Layout/DashbordLayout.jsx';
import Homedash from './component/dashbord/homedash/Homedash.jsx';
import CategoriesDash from './component/dashbord/categoriesdash/CategoriesDash.jsx';
import Regsiter from './component/web/register/Regsiter.jsx';
import Login from './component/web/login/Login.jsx';
import CategoriesDetails from './component/product/Proudct.jsx';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { CartContext, CartContextProvider } from './component/web/content/cart.jsx';
import UserContextProvider, { UserContext } from './component/web/content/User.jsx';
import ProtectedRoute from './protectedRoute/ProtectedRoute.jsx';
import Profile from './component/profile/Profile.jsx';
import SendCode from './component/web/auth/SendCode.jsx';

function App() {
  //const [user,setUser] = useState(null); //if null is user nonenter
  let {setUserToken}=useContext(UserContext);
  let {setCount,getCartContext}=useContext(CartContext);
  useEffect( ()=>{
    if(localStorage.getItem("userToken")!=null){
  setUserToken(localStorage.getItem("userToken"));
  setCount(getCartContext().count);
    }
  },[])
 const decoded = jwtDecoded(token);
  //console.log(decoded);
  setUser(decoded);




const router = createBrowserRouter([ //object each element in object
  {
    path:'/',
    element:<WebLayout user={user}/>,
    children:[
      {
        path:'register',
        element:<Regsiter/>
      },
      {
        path:'login',
        element:<Login saveCurrentUser={saveCurrentUser}/>
      },
      {
        path:'send',
        element:<SendCode/>
      },
    
      { 
        index:true,
         /*path:'home', or / */
        element:<Home/>
      },
      {
        path:'profile',
        element:
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>    // if put info and contant in folder profile so put children info & contant 
      },
      {
        path:'categories',
        element:<Categories/>  
      },
      {
      path:'prouduct/categories/:categoryId',
      element:<CategoriesDetails/>
      },
      {
        path:'*',
        element:<h2>page not found --- web</h2>
      }

    ]
  },
  {
    path:'dashbord',
    element:<DashbordLayout/>,
    children:[
      {
        path:'homedashbord',
        element:<Homedash/>,
      },
      {
        path:'categoriesdashbord',
        element:<CategoriesDash/>, 
      },
      {
        path:'*',
        element:<h2>page not found --- web</h2>
      }

    ]
  }
]);
  return (
    <UserContextProvider>
      <CartContextProvider> 
      <RouterProvider router={router} />
    </CartContextProvider>
    </UserContextProvider>
    
  
   
  )

}
export default App