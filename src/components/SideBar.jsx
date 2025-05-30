import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router'

export const SideBar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex flex-col gap-2 text-white'>
            <div className='h-[15%] bg-[#121212] flex flex-col justify-around'>
                <div className='flex gap-3 pl-8 item-center cursor-pointer'>
                    <img src={assets.home_icon} className='w-6 ' />
                    <p className='font-bold'>
                        <NavLink to="/"> Home</NavLink>
                    </p>
                </div>
                <div className='flex gap-3 pl-8 item-center cursor-pointer'>
                    <img src={assets.search_icon} className='w-6' />
                    <p className='font-bold'>Search</p>
                </div>
            </div>

            <div className='flex flex-col bg-[#121212] mt-2 h-[85%]'>
                <div className='flex justify-between p-4'>
                    <div className='flex gap-3 p-2'>
                        <img src={assets.stack_icon}
                            className='w-5 h-5'
                        />
                        <p className='font-bold'>Your Library</p>
                    </div>
                    <div className='flex gap-2 mt-2 mr-2 justify-center'>
                        <img src={assets.arrow_icon} className='w-3 h-3' />
                        <img src={assets.plus_icon} className='w-3 h-3 ' />
                    </div>
                </div>
                <div className='bg-[#262626] p-3 m-2 rounded font-semibold'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className='bg-white text-black rounded-full py-1.5 px-3 mt-3'>Create Playlist</button>
                </div>
                <div className='bg-[#262626] p-3 m-2 rounded font-semibold'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>we'll keep you update on new episodes</p>
                    <button className='bg-white text-black rounded-full py-1.5 px-3 mt-3'>Browse podcasts</button>
                </div>
            </div>



        </div>
    )
}
