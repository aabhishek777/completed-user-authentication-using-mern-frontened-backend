

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Singup';



import Login from './pages/Login';

import React from 'react'

const RoutingComponents = () => {
  return (

    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default RoutingComponents
