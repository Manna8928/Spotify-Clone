import React from 'react'
import { useParams } from 'react-router'
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {
    let params = useParams();
    const id = params.id;
    const albumData = albumsData[id];
    
    return (
        <>
            <div className='flex gap-8 mt-10 flex-col md:flex-row md:items-end'>

                <img className=' rounded w-48 ' src={albumData.image} />
                <div className='flex flex-col'>
                    <p className='text-[12px]'>Playlist</p>
                    <h1 className='font-bold text-5xl md:text-4xl mb-4'>{albumData.name}</h1>
                    <h4>{albumData.desc}</h4>
                    <div className='flex gap-1 text-[12px] mt-1'>
                        <img className='w-5' src={assets.spotify_logo} />
                        <p><b>Spotify</b>. 1,23,333 likes</p>
                        <p><b>50 songs</b>, about 2hr 30 min</p>
                    </div>

                </div>
                 </div>

                <div className='grid grid-cols-3 sm:grid-cols-4 m-4 pl-2 text-[#a7a7a7]'>
                    <p className='mr-30'><b>#</b>Title</p>
                    <p>Album</p>
                    <p className='hidden sm:block '>Date Added</p>
                    <img className='w-4 m-auto' src={assets.clock_icon} />
                </div>
                <hr />
                {songsData.map((song, index) => {
                    return <div key={index} className='grid grid-cols-3 sm:grid-cols-4 mt-2 gap-2 p-2 text-[#a7a7a7] items-center cursor-pointer hover:bg-[#ffffff2b]'>
                        <p className='text-white'>
                            <b className='text-[#a7a7a7]'>{index + 1}</b>
                            <img src={song.image} className='inline w-10 mr-5' />
                            {song.name}
                        </p>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] text-center'>{song.duration}</p>
                    </div>
                })}
           




        </>
    )
}

export default DisplayAlbum