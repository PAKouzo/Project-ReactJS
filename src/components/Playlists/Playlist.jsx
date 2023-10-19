import React from 'react'
import { GrPlayFill } from "react-icons/gr";
import ButtonToPlaylist from './ButtonToPlaylist';

import './main.css'

const Playlist = () => {
    return (
        <div className='playlist__container'>
            <button className='playlist__view'>
                <div className="row">
                    <div className="playlist__img-container col-12">
                        <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002023867d5cf694548540423dd" alt="" className="playlist__image"></img>
                        <button className='play__playlist'><GrPlayFill className='GrPlayFill'></GrPlayFill></button>
                    </div>
                    <div className="playlist__desc col-12">
                        <p className='playlist__title'>Today's Top Hits</p>
                        <p className='playlist__detail'>Doja Cat on top of the Hottest 50!</p>
                    </div>
                </div>
            </button>
            <button className='playlist__view'>
                <div className="row">
                    <div className="playlist__img-container col-12">
                        <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f000000020107a3aeac780c2d2cf621ca" alt="" className="playlist__image"></img>
                        <button className='play__playlist'><GrPlayFill className='GrPlayFill'></GrPlayFill></button>
                    </div>
                    <div className="playlist__desc col-12">
                        <p className='playlist__title'>RapCaviar</p>
                        <p className='playlist__detail'>New music from Fivio Foreign, Lil Yachty and ...</p>
                    </div>
                </div>
            </button>
            <button className='playlist__view'>
                <div className="row">
                    <div className="playlist__img-container col-12">
                        <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1" alt="" className="playlist__image"></img>
                        <button className='play__playlist'><GrPlayFill className='GrPlayFill'></GrPlayFill></button>
                    </div>
                    <div className="playlist__desc col-12">
                        <p className='playlist__title'>All Out 2010s</p>
                        <p className='playlist__detail'>The biggest songs of 2010s</p>
                    </div>
                </div>
            </button>
            <button className='playlist__view'>
                <div className="row">
                    <div className="playlist__img-container col-12">
                        <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e" alt="" className="playlist__image"></img>
                        <button className='play__playlist'><GrPlayFill className='GrPlayFill'></GrPlayFill></button>
                    </div>
                    <div className="playlist__desc col-12">
                        <p className='playlist__title'>Rock Classics</p>
                        <p className='playlist__detail'>Rock legends & epic songs that continue to...</p>
                    </div>
                </div>
            </button>
            <button className='playlist__view'>
                <div className="row">
                    <div className="playlist__img-container col-12">
                        <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe" alt="" className="playlist__image"></img>
                        <button className='play__playlist'><GrPlayFill className='GrPlayFill'></GrPlayFill></button>
                    </div>
                    <div className="playlist__desc col-12">
                        <p className='playlist__title'>Chill Hits</p>
                        <p className='playlist__detail'>Kick back to the best new and recent chill...</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default Playlist