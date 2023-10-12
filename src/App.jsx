import { useEffect } from 'react'
import './App.css'
import { getAccessToken } from './Server/SpotifyAuth'
import { getAlbums } from './api/api';

function App() {
  useEffect(() => {
    getAccessToken().then((res) => {
      localStorage.setItem("token", res);

      getAlbums().then(res => console.log(res));
    });


    

  }, [])

  return (
    <>

    </>
  )
}

export default App
