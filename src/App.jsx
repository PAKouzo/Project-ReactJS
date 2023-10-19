import React from 'react'
import HOME from './pages/home'
import '../src//styles/main.css'
import { useEffect } from 'react'
import { getAccessToken } from './Server/SpotifyAuth'
import { getAlbums } from './api/api';
import MainViewEnd from './components/Main view end/MainViewEnd'
import './styles/main.css'

function App() {
  useEffect(() => {
    getAccessToken().then((res) => {
      localStorage.setItem("token", res);

      getAlbums().then(res => console.log(res));
    });
  }, [])
  
  return (
    <div spotify-page>
      <HOME></HOME>
      <MainViewEnd></MainViewEnd>
    </div>  
  )
}

export default App