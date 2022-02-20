import client from '../client';

function login({ login, userPassword }) {
    return client.post('/auth/local',
        {
            identifier: login,
            password: userPassword,
        },
    );
}

export default login;