import client from '../client';

function login({ login, password }) {
    return client.post('/auth/local',
        {
            identifier: login,
            password: password,
        },
    );
}

export default login;


