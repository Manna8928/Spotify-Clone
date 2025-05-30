import React from 'react'

export const SongItem = (props) => {
  return (
     <>
    
        <div className='flex flex-col gap-2 min-w-[180px] cursor-pointer rounded justify-center p-2 hover:bg-[#ffffff26]' >
            <img src={props.image} className='rounded'/>
            <div className='font-bold text-[12px]'>{props.name}</div>
            <div className='text-slate-200 text-[10px]'>{props.desc}</div>
        </div>
       
    </>
  )
}
