import React from 'react'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";
import './main.css'

const Sidebar = () => {
  return (
    <ul className='sidebar'>
        <li><button className='sidebar__button'><FaSpotify className='sidebar__logo'></FaSpotify> Spotify</button></li>
        <li><button className='sidebar__button'><GoHome className='sidebar__logo'></GoHome> Home</button></li>
        <li><button className='sidebar__button'><CiSearch className='sidebar__logo'></CiSearch> Search</button></li>
    </ul>
  )
}

export default Sidebar