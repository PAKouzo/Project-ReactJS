import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './main.css'

const Socialmedia = () => {
  return (
    <div className='socialmedia'>
        <button className='button__socialmedia'><FaInstagram></FaInstagram></button>
        <button className='button__socialmedia'><FaTwitter></FaTwitter></button>
        <button className='button__socialmedia'><FaFacebook></FaFacebook></button>
    </div>
  )
}

export default Socialmedia