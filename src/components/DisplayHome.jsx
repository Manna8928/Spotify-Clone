import React from 'react'
import { assets, albumsData, songsData } from '../assets/assets'
import { AlbumItem } from './AlbumItem'
import { SongItem } from './SongItem'


export const DisplayHome = () => {
  return (
    <>
        <div className='font-bold mx-5 my-3 text-2xl'>Featured Charts</div>
                <div className='flex gap-3 mx-5 mb-4 overflow-auto'>
                    {
                    albumsData.map((item)=> <AlbumItem key={item.id} image={item.image} name={item.name} desc={item.desc} id={item.id}/>
                    )}   
                </div>
                <div className='font-bold mx-5 my-1 text-2xl'>Today's Top hits</div>
                <div className='flex gap-3 m-5 overflow-auto'>
                    {
                    songsData.map((item)=> <SongItem key={item.id} image={item.image} name={item.name} desc={item.desc} id={item.id}/>
                    )}   
                </div>
    
    </>
  )
}
