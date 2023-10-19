import { fetchWebApi } from "../Server/SpotifyAuth";

async function getPlaylist() {
    return await fetchWebApi('/browse/featured-playlists', 'GET');
}

async function getAlbums() {
    return await fetchWebApi('/browse/new-releases', 'GET');
}

export { getPlaylist, getAlbums }