import axios from 'axios';

const TOKEN_KEY = 'accessToken';
const USER_KEY = "userKey"

export function getToken() {
    return localStorage.getItem(TOKEN_KEY) || '';
}

export function setToken(token) {
    return localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}
export function getUser() {
    const data = localStorage.getItem(USER_KEY);
    return data && JSON.parse(data);
}

export function setUser(user) {
    return localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function removeUser() {
    localStorage.removeItem(USER_KEY);
}

const client = axios.create({
    baseURL: 'https://radiant-temple-07706.herokuapp.com/',
    timeout: 10000,
});

export const authClient = axios.create({
    baseURL: 'https://radiant-temple-07706.herokuapp.com/',
    timeout: 10000,
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