import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { DisplayHome } from './DisplayHome'
import { Routes, Route, useLocation } from 'react-router'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
    let location = useLocation();
    const path = location.pathname;
    const albumBgColor=albumsData[path?.split("/album/")?.[1]]?.bgColor
    const bgColor = path == "/" ? "#121212" : path.includes("/album")?`linear-gradient(${albumBgColor},#121212)`:"#121212";

    return (
        <>
            <div className={`w-[100%] m-2 rounded overflow-auto lg:w-[75%]`} style={{background: bgColor}}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<DisplayHome />} />
                    <Route path="/album/:id" element={<DisplayAlbum />} />
                </Routes>

            </div>
        </>
    )
}

export default Display