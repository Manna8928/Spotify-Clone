import React, { useContext } from 'react'
import { songsData, assets } from '../assets/assets'
import { SongContext } from './context'
const Player = () => {
    const { audioRef, playstatus, setPlayStatus } = useContext(SongContext);
    return (
        <div className='flex  h-[10%] px-4 text-white bg-black
        items-center mt-5 justify-between'>
            <div className='hiddedn lg:flex items-center gap-4'>
                <img src={songsData[0].image} className='w-12 h-12'></img>
                <div className='flex flex-col'>
                    <div>{songsData[0].name}</div>
                    <div>{songsData[0].desc.substring(0, 12)}</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='flex gap-2 items-center'>
                    <img src={assets.shuffle_icon} className='w-5 h-5 cursor-pointer ' />
                    <img src={assets.prev_icon} className='w-5 h-5 cursor-pointer ' />
                    {playstatus ?
                        <>
                            <img src={assets.pause_icon} className='w-5 h-5 cursor-pointer ' onClick={() => {
                                audioRef.current.pause();
                            }} />
                            {setPlayStatus(false)}
                        </>
                        :
                        <>
                            <img src={assets.play_icon} className='w-5 h-5 cursor-pointer ' onClick={() => {
                                audioRef.current.play();
                            }} />
                            {setPlayStatus(true)}
                        </>
                    }
                    <img src={assets.next_icon} className='w-5 h-5 cursor-pointer ' />
                    <img src={assets.loop_icon} className='w-5 h-5 cursor-pointer ' />
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''>1:25</div>
                    <div className='bg-gray-300 w-[60vw] max-w-[500px] cursor-pointer rounded-full'>
                        <hr className='bg-green-800 w-0 h-1 border-none rounded-full' />
                    </div>
                    <div className=''>3:20</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={assets.plays_icon} className='w-4' />
                <img src={assets.mic_icon} className='w-4' />
                <img src={assets.queue_icon} className='w-4' />
                <img src={assets.speaker_icon} className='w-4' />
                <img src={assets.volume_icon} className='w-4' />
                <img src={assets.mini_player_icon} className='w-4' />
                <img src={assets.zoom_icon} className='w-4' />

            </div>


        </div>
    )
}

export default Player