import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Playlists from '../../../pages/Spotify Playlists/Playlists'
import './main.css'

const Showall = () => {
  return (
    <div>
        <Link className='showall' to='/Playlists'>Show all</Link>
        <Routes>
          <Route path="/Playlists" element={<Playlists />} />
        </Routes>
    </div>
  )
}

export default Showall