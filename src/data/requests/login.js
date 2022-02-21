import { authClient } from '../client';

function login({ login, password }) {
    return authClient.post('/auth/local',
        {
            identifier: login,
            password: password,
        },
    );
}

export default login;


