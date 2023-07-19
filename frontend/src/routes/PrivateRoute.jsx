import React from 'react'
import Login from '../component/Login'

const PrivateRoute = ({children}) => {

    const token=JSON.parse(localStorage.getItem("authToken"))||""

  return token ? children :<Login/>
}

export default PrivateRoute
