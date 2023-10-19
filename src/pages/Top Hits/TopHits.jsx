import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopHits = () => {
    const [playlist, setPlaylist] = useState([]);
    const [albums, setAlbums] = useState([]);

    const fetchData = async () => {
        try {
            const token = await getAccessToken();
            localStorage.setItem('token', token);

            const [playlists, newAlbums] = await Promise.all([getPlaylist(), getAlbums()]);
            setPlaylist(playlists.playlists.items);
            setAlbums(newAlbums.albums.items);
        } catch (error) {
            console.error('Có lỗi xảy ra: ', error);
        }
    };

    const getAccessToken = async () => {
        const client_id = 'fa79610223aa45d3b0b4de627f2b4a3f';
        const client_secret = 'e33d8d8c47ab40fa9db1d54b4cf750ec';

        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            headers: {
                'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
            },
            data: 'grant_type=client_credentials',
        };

        const response = await axios(authOptions);

        if (response.status === 200) {
            return response.data.access_token;
        } else {
            throw new Error(`Request failed with status code ${response.status}`);
        }
    };

    const getPlaylist = async () => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/browse/featured-playlists',
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return response.data;
    };

    const getAlbums = async () => {
        const token = localStorage.getItem('token');
        const response = await axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/browse/new-releases',
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return response.data;
    };

    useEffect(() => {
        fetchData();
    }, []); // Thêm một mảng rỗng để đảm bảo useEffect chỉ gọi một lần khi component được tạo ra.

    return (
        <div className="App">
            <div>
                <h3>Featured Playlists:</h3>
                <ul>
                    {playlist.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>New Releases:</h3>
                <ul>
                    {albums.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TopHits;