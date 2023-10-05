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
                      <div className="col-2">Today's Top Hits</div>
                      <div className="col-2">RapCaviar</div>
                      <div className="col-2">All Out 2010s</div>
                      <div className="col-2">Rock Classics</div>
                      <div className="col-2">Chill Hits</div>
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
