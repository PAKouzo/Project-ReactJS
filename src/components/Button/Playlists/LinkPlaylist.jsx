import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Playlists from '../../../pages/Spotify Playlists/Playlists'
import './main.css'

const LinkPlaylist = () => {
  return (
    <div>
        <Link className='playlist' to='/Playlists'>Spotify Playlists</Link>
        <Routes>
          <Route path="/Playlists" element={<Playlists />} />
        </Routes>
    </div>
  )
}

export default LinkPlaylist