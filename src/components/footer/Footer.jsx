import React from 'react'
import Communities from './Communities'
import Company from './Company'
import UsefulLinks from './UsefulLinks'
import Socialmedia from './Socialmedia'
import './main.css'

const Footer = () => {
  return (
    <div className='footer__main-view col-12'>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-3"><Company></Company></div>
            <div className="col-3"><Communities></Communities></div>
            <div className="col-3"><UsefulLinks></UsefulLinks></div>
            <div className="col-3"><Socialmedia></Socialmedia></div>
          </div>
        </div>
        <div className="col-12">
          <div className='footer__border'></div>
          <p className='footer__text'>© 2023 Spotify AB</p>
        </div>
      </div>
    </div>
  )
}

export default Footer