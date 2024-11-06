import React, { useEffect } from 'react'
import rs1 from '../assets/glass.webp'
import rs2 from '../assets/newicebig.webp'
import rs3 from '../assets/lemo.webp'

const Home = () => {

  return (
 <>
        <div className=" flex">
           <div className="ml-[250px] mt-[50px]">
            <img src={rs1}/>
           </div>
           <div className="flex ml-[100px]  mt-[-80]">
            <h1 className=' mt-[250px] font-bold text-[50px]'>A HEALTHY</h1>
            <p className=' mt-[255px] ml-5  font-thin text-[45px]'>SIP!</p>
            <p className=' mt-[320px] ml-[-360px] font-thin text-[20px] flex'>
              Ya! It’s cup of tea, let’s be fresh and cherish every moment in each sip. <br/> It’s refreshing burst and where there is tea, there is always freshness …</p>
           </div>
            <h3 className=' mt-[390px] ml-[-580px] font-medium text-[20px] flex'>This page is under </h3>
            <h3 className=' mt-[390px] ml-[5px] font-bold text-[20px] text-yellow-600 stroke-black'>Raghul </h3>
            <h3 className=' mt-[390px] ml-[5px] font-medium text-[20px] flex'>Control</h3>
        </div>
        <div className=" h-[100px] w-[600px] flex   ml-[780px] mt-[-90px] ">
            <img src={rs1} className='border-2  rounded border-solid hover:cursor-pointer    ' />
            <img src={rs2}  className=' transition duration-0 hover:duration-150 border-2 rounded border-solid hover:cursor-pointer ml-3' />
            <img src={rs3} className='border-2 rounded border-solid hover:cursor-pointer ml-3' />
          
        </div>

 </> 
  )
}

export default Home