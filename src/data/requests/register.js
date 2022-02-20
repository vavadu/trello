import client from '../client';

function register({ login, email, password }) {
    return client.post('/auth/local/register',
        {
            username: login,
            email: email,
            password: password,
        },
    )
}

export default register;