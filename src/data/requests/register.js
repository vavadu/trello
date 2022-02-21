import { authClient } from '../client';

function register({ login, email, password }) {
    return authClient.post('/auth/local/register',
        {
            username: login,
            email: email,
            password: password,
        },
    )
}

export default register;