import axios from "axios";

function getAccessToken() {
  const client_id = 'fa79610223aa45d3b0b4de627f2b4a3f';
  const client_secret = 'e33d8d8c47ab40fa9db1d54b4cf750ec';

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
    },
    data: 'grant_type=client_credentials',
    json: true
  };

  return axios(authOptions)
    .then((response) => {
      if (response.status === 200) {
        const token = response.data.access_token;
        return token;
      } else {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    })
    .catch((error) => {
      throw error;
    });
}

async function fetchWebApi(endpoint, method) {
  const token = localStorage.getItem("token");
  return axios({
    method: method,
    url: `https://api.spotify.com/v1${endpoint}`,
    headers: {
      Authorization: 'Bearer ' + token
    },
  })
}

export { getAccessToken, fetchWebApi };
