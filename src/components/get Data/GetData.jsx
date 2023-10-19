import React from 'react'
import { Component, useEffect, useState } from 'react';
import { getAlbums, getPlaylist } from '../../api/api';

const GetData = () => {
    const [playlistData, setPlaylistData] = useState([]);
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        // Gọi hàm getPlaylist và getAlbums và cập nhật state với kết quả
        getPlaylist()
            .then(data => setPlaylistData(data))
            .catch(error => console.error(error));

        getAlbums()
            .then(data => setAlbumData(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <h1>Featured Playlists</h1>
            <ul>
                {playlistData.map((playlist, index) => (
                    <li key={index}>{playlist.name}</li>
                ))}
            </ul>

            <h1>New Releases</h1>
            <ul>
                {albumData.map((album, index) => (
                    <li key={index}>{album.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default GetData