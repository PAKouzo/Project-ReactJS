import React from 'react'
import { useState } from 'react'
import Backward from '../../components/Button/Backward/Backward'
import Forward from '../../components/Button/Forward/Forward'
import Signup from '../../components/Button/SignUp/SignUp'
import './main.css'

const HOME = () => { 
  return (
    <div>
      <div>
        <div class="row">
          <div class="leftspotify col-4">Spotify</div>
          <div class="rightspotify col-8">
            <div className="rightspotify__top row">
              <div className="col-12">
                <div class="row">
                  <div className="col-1">
                    <Backward></Backward>
                  </div>
                  <div className="col-1">
                    <Forward></Forward>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-2">
                    <Signup></Signup>
                  </div>
                  <div className="col-2">Login</div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-11">Spotify Playlists</div>
                      <div className="col-1">Show all</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2 col-xxl-3">Today's Top Hits</div>
                      <div className="col-2 col-xxl-3">RapCaviar</div>
                      <div className="col-2 col-xxl-3">All Out 2010s</div>
                      <div className="col-2 col-xxl-3">Rock Classics</div>
                      <div className="col-2 col-xxl-0">Chill Hits</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2">Company</div>
                      <div className="col-2">Communities</div>
                      <div className="col-2">Full links</div>
                      <div className="col-2"></div>
                      <div className="col-2">Contact</div>
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
