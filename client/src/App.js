import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './views/Home/Home'
import Login from './views/Login/Login'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Signup from './views/Signup/Signup'
import MyPlate from './views/MyPlate/MyPlate'
import MyOrders from './views/MyOrders/MyOrders'
import Profile from './views/Profile/Profile'
import Menu from './views/Menu/Menu'
import Table from './views/Table/Table'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/myPlate' element={<MyPlate/>} />
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/tables' element={<Table/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
