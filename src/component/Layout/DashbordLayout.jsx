import React from 'react'
import Navbar from '../dashbord/navbar/Navbar'
import Footer from '../dashbord/footer/Footer'
import { Outlet } from 'react-router-dom'


function DashbordLayout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default DashbordLayout