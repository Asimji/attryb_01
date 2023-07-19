import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../component/HomePage'
import Login from '../component/Login'
import PrivateRoute from './PrivateRoute'
import Register from '../component/Register'
import OEM from '../component/OEM'
import AddDealer from '../component/AddDealer'



const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={
      <PrivateRoute>
      <HomePage/>
      </PrivateRoute>
      }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/original' element={<OEM/>}/>
      <Route path='/dealer/add' element={<AddDealer/>}/>
    </Routes>
  )
}

export default AllRoutes
