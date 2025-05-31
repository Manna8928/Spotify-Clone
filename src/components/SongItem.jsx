import React, { useContext } from 'react'
import { SongContext } from './context'
import { songsData } from '../assets/assets'

export const SongItem = (props) => {
  const {playSong,audioRef}=useContext(SongContext)
  
  return (
     <>
    
        <div className='flex flex-col gap-2 min-w-[180px] cursor-pointer rounded justify-center p-2 hover:bg-[#ffffff26]' 
        onClick={()=>{
          
          playSong(props.id);

        }}>
            <img src={props.image} className='rounded'/>
            <div className='font-bold text-[12px]'>{props.name}</div>
            <div className='text-slate-200 text-[10px]'>{props.desc}</div>
        </div>
       
    </>
  )
}
