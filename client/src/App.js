import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import BookTable from './views/BookTable/BookTable'
import MyPlate from './views/MyPlate/MyPlate'
import MyOrders from './views/MyOrders/MyOrders'
import Profile from './views/Profile/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/booktable' element={<BookTable/>} />
          <Route path='/myPlate' element={<MyPlate/>} />
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
