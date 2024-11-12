import { useState } from 'react'

import Nav from './components/Nav'
import Home from './components/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';





function App() {  


  return (
    <>
     
      <Routes>
        <Route path='/' element={<Login/>} />
       
        <Route path='/home' element={<Home/>} />
      </Routes>
     
    </>
  )
}

export default App
