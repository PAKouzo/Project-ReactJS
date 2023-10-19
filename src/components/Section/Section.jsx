import React from 'react'
import './main.css'

const Section = () => {
  return (
    <div className='section__view'>
      <div className='section__item'>
        <h5 className='section__title'>Create your first playlist</h5>
        <p className='section__detail'>It's easy, we'll help you</p>
        <button className='section__button'>Create playlist</button>
      </div>
      <div className='section__item'>
        <h5 className='section__title'>Let's find some podcasts to follow</h5>
        <p className='section__detail'>We'll keep you updated on new episodes</p>
        <button className='section__button'>Browse podcasts</button>
      </div>
    </div>
  )
}

export default Section