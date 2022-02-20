import axios from 'axios';

const TOKEN_KEY = 'accessToken';


export function getToken() {
    return localStorage.getItem(TOKEN_KEY) || '';
}

export function setToken(token) {
    return localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}


const client = axios.create({
    baseURL: 'https://radiant-temple-07706.herokuapp.com/',
    timeout: 1000,
});


client.interceptors.request.use((config) => {
    const accessToken = getToken();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
        delete config.headers.Authorization;
    }

    return config;
})

export default client;