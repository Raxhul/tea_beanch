import { useState } from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {  
  document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Form/>} />
       
        <Route path='/home.' element={<Home/>} />
      </Routes>
     
    </>
  )
}

export default App
