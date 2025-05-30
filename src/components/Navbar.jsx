import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

export const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
     <div className='flex justify-between items-center p-4 font-semibold'>
                    <div className='flex items-center gap-6'>
                        <img src={assets.arrow_left}  onClick={()=>{
                          navigate(-1)
                        }} className='w-8 rounded-2xl cursor-pointer bg-black p-2 ' />
                        <img src={assets.arrow_right} onClick={()=>{
                          navigate(1)
                        }}  className='w-8 rounded-2xl cursor-pointer bg-black p-2 ' />
                    </div>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className='bg-white text-black rounded-2xl cursor-pointer py-1 px-2 text-[12px] hidden md:block '>Explore Premium</div>
                        <div className='bg-black text-white rounded-2xl cursor-pointer py-1 px-2 text-[12px] '>Install App</div>
                        <div className='bg-purple-600 text-black rounded-full px-2 py-1 h-7 w-7 text-[12px]'>M</div>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-[12px] mx-3'>
                    <div className='bg-white text-black rounded-xl py-0.5 px-3 cursor-pointer '>All</div>
                    <div className='bg-black rounded-xl py-0.5 px-3 cursor-pointer'>Music</div>
                    <div className='bg-black rounded-xl py-0.5 px-3 cursor-pointer'>Podcast</div>
                </div>
    </>
  )
}
