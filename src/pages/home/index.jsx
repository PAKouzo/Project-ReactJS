import React from 'react'
import Backward from '../../components/Button/Backward/Backward'
import Forward from '../../components/Button/Forward/Forward'
import Signup from '../../components/Button/SignUp/SignUp'
import Login from '../../components/Button/LogIn/Login'
import LinkPlaylist from '../../components/Button/Playlists/LinkPlaylist'
import Showall from '../../components/Button/Show all/Showall'
import Sidebar from '../../components/Sidebar/Sidebar'
import SectionHeader from '../../components/Section_Header/sectionHeader'
import Section from '../../components/Section/Section'
import Privacy from '../../components/Information Spotify/Privacy'
import Footer from '../../components/footer/Footer'
import MainViewEnd from '../../components/Main view end/MainViewEnd'
import Playlist from '../../components/Playlists/Playlist'
import './main.css'

const HOME = () => {
  return (
    <div className='home'> 
      <div>
        <div class="row">
          <div class="left__sidebar col-3">
            <div className="row">
              <div className="topbar col-12">
                <Sidebar></Sidebar>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="yourlibrary col-12">
                    <SectionHeader></SectionHeader>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <Section></Section>
                      </div>
                    </div>
                  </div>
                  <div className="col-12"><Privacy></Privacy></div>
                </div>
              </div>
            </div>
          </div>
          <div class="right__sidebar col-9">
            <div className="row">
              <div className="right__sidebar-header col-12">
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
                    <div className="body__header row">
                      <div className="col-11">
                        <LinkPlaylist></LinkPlaylist>
                      </div>
                      <div className="col-1">
                        <Showall></Showall>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <Playlist></Playlist>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Footer></Footer>
              </div>
            </div>
          </div>
          {/* <div className="col-12"><MainViewEnd></MainViewEnd></div> */}
        </div>
      </div>
    </div>
  )
}

export default HOME
