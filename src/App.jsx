import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { SideBar } from './components/SideBar'
import Player from './components/Player'
import Display from './components/Display'
import { songsData } from './assets/assets'
import { SongContext } from './components/context'

const App = () => {
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [duration, setDuration] = useState({ min: 0, sec: 0 })
  const [currentTime, setCurrentTime] = useState({ min: 0, sec: 0 })
  const audioRef = useRef(null);
  const seekBarRef = useRef(null);
  const seekBarDivRef=useRef(null);

  const playSong = useCallback(async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    await setPlayStatus(true);
    await setDuration({
      min: Math.floor(audioRef.current.duration / 60),
      sec: Math.ceil(audioRef.current.duration % 60).toString().padStart(2, '0')
    })

  }, [setTrack,setPlayStatus,setDuration])

  useEffect(() => {
    const timeUpdate = async () => {
      if(audioRef.current.currentTime===audioRef.current.duration){
        setPlayStatus(false)
      }
      const width=(audioRef.current.currentTime/audioRef.current.duration)*100;
      
      seekBarRef.current.style.width=`${width}%`;
      setCurrentTime({
        min: Math.floor(audioRef.current.currentTime / 60),
        sec: Math.ceil(audioRef.current.currentTime % 60).toString().padStart(2, '0')
      })
    };
    if (audioRef.current) {
      
      audioRef.current.addEventListener("timeupdate", timeUpdate);
    }
    return () => {
      if (audioRef.current)
        audioRef.current.removeEventListener("timeupdate", timeUpdate);
    }
  }, [setCurrentTime]);


  return (
    <SongContext.Provider value={{ track, setTrack, audioRef, playStatus, setPlayStatus, playSong, duration, currentTime, seekBarRef, seekBarDivRef }}>
      <div className='bg-[#000000] text-white h-screen'>
        <div className='h-[90%] flex'>
          <SideBar />
          <Display />
        </div>
        <div>
          <audio ref={audioRef} src={track.file} />
          <Player />
        </div>

      </div>
    </SongContext.Provider >
  )
}

export default App