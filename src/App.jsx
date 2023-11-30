import React, { useState } from 'react'
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

function App() {
  const [user,setUser] = useState(null); //if null is user nonenter
  const saveCurrentUser = ()=>{
  const token = localStorage.getItem("userToken");
  const decoded = jwtDecoded(token);
  //console.log(decoded);
  setUser(decoded);
}

useEffect( ()=>{
  if(localStorage.getItem("userToken")){
saveCurrentUser();
  }
},[]
)

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
        index:true,
        //path:'home', or /
        element:<Home/>
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
   <RouterProvider router={router} />
   
  )
}

export default App