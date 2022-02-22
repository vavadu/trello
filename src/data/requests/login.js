import { authClient } from '../client';

function login({ login, password }) {
    return authClient.post('/auth/local',
        {
            identifier: login,
            password: password,
        },
    ).catch((error) => {
        return Promise.reject(error.response.data.data[0].messages[0].message);
    });
}

export default login;


