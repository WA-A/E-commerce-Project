import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({chlidren}) {
    if(localStorage.getItem("userTpken")== null){
        return <Navigate to='/login'/>
    }
    /* If the user write the name of the page directly in Path and it is not on the site, he will be taken to the login page */
  return chlidren
}

export default ProtectedRoute