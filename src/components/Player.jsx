import React, { useContext } from 'react'
import { songsData, assets } from '../assets/assets'
import { SongContext } from './context'
const Player = () => {
    const { track, audioRef, playStatus, setPlayStatus, playSong, duration, currentTime, seekBarRef} = useContext(SongContext);
    // console.log("current time ",audioRef.current.currentTime)
    
    return (
        <div className='flex  h-[10%] px-4 text-white bg-black
        items-center mt-3 justify-between'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={track.image} className='w-12 h-12'></img>
                <div className='flex flex-col'>
                    <div>{track.desc.substring(0, 12)}</div>
                    <div>{track.name}</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <div className='flex gap-2 items-center'>
                    <img src={assets.shuffle_icon} className='w-5 h-5 cursor-pointer ' />
                    <img src={assets.prev_icon} className='w-5 h-5 cursor-pointer ' onClick={()=>{
                        if(track.id>0)
                            playSong(track.id-1)
                    }} />
                    {playStatus ?

                        <img src={assets.pause_icon} className='w-5 h-5 cursor-pointer ' onClick={() => {
                            audioRef.current.pause();
                            setPlayStatus(false)
                        }} />

                        :

                        <img src={assets.play_icon} className='w-5 h-5 cursor-pointer ' onClick={() => {
                            audioRef.current.play();
                            setPlayStatus(true)
                        }} />

                    }
                    <img src={assets.next_icon} className='w-5 h-5 cursor-pointer ' onClick={()=>{
                        if(track.id<songsData.length-1)
                            playSong(track.id+1)
                    }} />
                    <img src={assets.loop_icon} className='w-5 h-5 cursor-pointer ' />
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''>{currentTime.min}:{currentTime.sec}</div>
                    <div className='bg-gray-300 w-[60vw] max-w-[500px] cursor-pointer rounded-full'>
                        <hr ref={seekBarRef} className='bg-green-800 w-0 h-1 border-none rounded-full' />
                    </div>
                    <div className=''>{duration.min}:{duration.sec}</div>
                </div>
            </div>
            <div className='lg:flex gap-2 hidden'>
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