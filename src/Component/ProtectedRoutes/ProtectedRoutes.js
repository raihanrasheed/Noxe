
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './../Login/Login';

export default function ProtectedRoutes({loginData}) {

  return (
    <div>
{loginData? <Outlet/>: <Navigate to='Login'/>}

    </div>
  )
}
