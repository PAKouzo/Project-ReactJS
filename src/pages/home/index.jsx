import React from 'react'
import Backward from '../../components/Button/Backward/Backward'
import Forward from '../../components/Button/Forward/Forward'
import Signup from '../../components/Button/SignUp/SignUp'
import Login from '../../components/Button/LogIn/Login'
import LinkPlaylist from '../../components/Button/Playlists/LinkPlaylist'
import Showall from '../../components/Button/Show all/Showall'
import Company from '../../components/Information/Company/Company'
import Communities from '../../components/Information/Communities/Communities'
import UsefulLinks from '../../components/Information/Useful links/UsefulLinks'
import Socialmedia from '../../components/Information/Social Media/Socialmedia'
import './main.css'

const HOME = () => {
  return (
    <div>
      <buttonLinkPlaylist></buttonLinkPlaylist>
      <div>
        <div class="row">
          <div class="leftspotify col-3">Spotify</div>
          <div class="rightspotify col-9">
            <div className="row">
              <div style={{ backgroundColor: "blue" }} className="rightspotify__top col-12">
                <div class="row">
                  <div className="col-1">
                    <div className="button__directional row">
                      <div className="col-6" color='red'><Backward></Backward></div>
                      <div className="col-6"><Forward></Forward></div>
                    </div>
                  </div>
                  <div className="col-8"></div>
                  <div className="button__SignLogin col-3">
                    <div className="row">
                      <div className="col-6">
                        <Signup></Signup>
                      </div>
                      <div className="col-6">
                        <Login></Login>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-11">
                        <LinkPlaylist></LinkPlaylist>
                      </div>
                      <div className="col-1">
                        <Showall></Showall>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-2">
                        <div className="row">
                          <div className="col-12">
                            <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002023867d5cf694548540423dd" alt="" className="album__image"></img>
                          </div>
                          <div className="col-12">
                            <p className='album__title'>Today's Top Hits</p>
                            <p className='album__details'>Doja Cat on top of the Hottest 50!</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">
                          <div className="col-12">
                          <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f000000020107a3aeac780c2d2cf621ca" alt="" className="album__image"></img>
                          </div>
                          <div className="col-12">
                            <p className='album__title'>RapCaviar</p>
                            <p className='album__details'>New music from Fivio Foreign, Lil Yachty and ...</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">
                          <div className="col-12">
                          <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1" alt="" className="album__image"></img>
                          </div>
                          <div className="col-12">
                            <p className='album__title'>All Out 2010s</p>
                            <p className='album__details'>The biggest songs of 2010s</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">
                          <div className="col-12">
                            <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e" alt="" className="album__image"></img>
                          </div>
                          <div className="col-12">
                            <p className='album__title'>Rock Classics</p>
                            <p className='album__details'>Rock legends & epic songs that continue to...</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="row">
                          <div className="col-12">
                            <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe" alt="" className="album__image"></img>
                          </div>
                          <div className="col-12">
                            <p className='album__title'>Chill Hits</p>
                            <p className='album__details'>Kick back to the best new and recent chill...</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <Company></Company>
                      </div>
                      <div className="col-3">
                        <Communities/>
                      </div>
                      <div className="col-3">
                        <UsefulLinks></UsefulLinks>
                      </div>
                      <div className="col-3">
                        <Socialmedia></Socialmedia>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2">2023 Spotify AB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HOME
