import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './main.css'

const Socialmedia = () => {
  return (
    <div className='socialmedia'>
        <button className='button__socialmedia'><FaInstagram className='socialmedia__item'></FaInstagram></button>
        <button className='button__socialmedia'><FaTwitter className='socialmedia__item'></FaTwitter></button>
        <button className='button__socialmedia'><FaFacebook className='socialmedia__item'></FaFacebook></button>
    </div>
  )
}

export default Socialmedia