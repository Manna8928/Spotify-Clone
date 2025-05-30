import React, { useState, useRef } from 'react'
import { SideBar } from './components/SideBar'
import Player from './components/Player'
import Display from './components/Display'
import { songsData } from './assets/assets'
import { SongContext } from './components/context'

const App = () => {
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus,setPlayStatus]=useState(false);
  const audioRef = useRef(null);

  return (
    <SongContext.Provider value={{ setTrack, audioRef, playStatus, setPlayStatus }}>
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
    </SongContext.Provider>
  )
}

export default App