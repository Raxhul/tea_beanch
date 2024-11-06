import React from 'react'
import i from '../assets/logo.png'
const Nav = () => {
  return (
   <nav className=' flex justify-center h-[100px] w-[100%vh] font-sans text-left'> 
   <div className="flex justify-around w-[800px]">
   <p className=' mt-5   hover:cursor-pointer font-extrabold'>HOME</p>
    <p className=' mt-5 hover:cursor-pointer font-extrabold'>ABOUT</p>
    <img  className='mt-1 h-[50px] ' src={i}/>
    <p className=' mt-5  hover:cursor-pointer font-extrabold '>MENU</p>
    <p className=' mt-5 hover:cursor-pointer font-extrabold' >CONTACT</p>
   </div>
   </nav>
  )
}

export default Nav
