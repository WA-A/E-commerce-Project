import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import WebLayout from './component/Layout/WebLayout.jsx';
import Home from './component/web/home/Home';
import Categories from './component/web/categories/Categories.jsx';
import DashbordLayout from './component/Layout/DashbordLayout.jsx';
import Homedash from './component/dashbord/homedash/Homedash.jsx';
import CategoriesDash from './component/dashbord/categoriesdash/CategoriesDash.jsx';
import Regsiter from './component/web/register/Regsiter.jsx';

const router = createBrowserRouter([ //object each element in object
  {
    path:'/',
    element:<WebLayout/>,
    children:[
      {
        path:'register',
        element:<Regsiter/>
      },
    
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'categories',
        element:<Categories/>  
      },
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
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App